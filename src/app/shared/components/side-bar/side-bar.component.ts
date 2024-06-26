import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrackService } from '@modules/tracks/services/track.service';

@Component({
  selector: 'app-side-bar', // nombre del componente a llamar en el html
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit{
  mainMenu: {
    defaultOptions: Array<any>,
    accessLink: Array<any>
  } = {defaultOptions: [], accessLink: []}

  customOptions: Array<any> = []
  constructor(private router: Router) {}
  ngOnInit(): void {
      this.mainMenu.defaultOptions = [
        {
          name: 'Home',
          icon: 'uil uil-estate',
          router: ['/', 'auth']
        },
        {
          name: 'Buscar',
          icon: 'uil uil-search',
          router: ['/', 'history']
        },
        {
          name: 'Tu biblioteca',
          icon: 'uil uil-chart',
          router: ['/', 'favorites'],
          query: {hola: 'mundo'}
        }
      ]
      this.mainMenu.accessLink = [
        {
          name: 'Crear lista',
          icon: 'uil-plus-square'
        },
        {
          name: 'Canciones que te gustan',
          icon: 'uil-heart-medical'
        }
      ]
      this.customOptions = [
        {
          name: 'Mi lista n.° 1',
          router: ['/']
        },
        {
          name: 'Mi lista n.° 2',
          router: ['/']
        }, 
        {
          name: 'Mi lista n.° 3',
          router: ['/']
        },
        {
          name: 'Mi lista n.° 4',
          router: ['/']
        }
      ]
  }

  goTo($event: any): void {
    this.router.navigate(['/', 'favorites'], {
      queryParams: {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3'
      }
    })
    console.log($event)
  }
}
