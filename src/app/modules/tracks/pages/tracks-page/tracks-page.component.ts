import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';
import * as dataRaw from '../../../../data/tracks.json'

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []
  listObservers$: Array<Subscription> = []
  constructor(private trackService: TrackService) {}

  ngOnInit(): void {
    const observer1$ = this.trackService.dataTracksTrending$.subscribe(response =>{
     this.tracksTrending = response
     this.tracksRandom = response
     console.log('Canciones trending ', response);
    })
 
    const observer2$ = this.trackService.dataTracksRandom$.subscribe(response =>{
     this.tracksRandom = [... this.tracksRandom, ... response]
     console.log('Canciones Random entrando ...', response);
    })
 
     this.listObservers$ = [observer1$, observer2$]
   }
   ngOnDestroy(): void {
     this.listObservers$.forEach(u => u.unsubscribe())
   }
}
