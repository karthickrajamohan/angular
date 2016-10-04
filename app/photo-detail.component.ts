import {Component, OnInit} from '@angular/core';
import { Photo } from './photo';
import { CarouselConfig } from './carousel-config';

const PHOTOS: Photo[] =[
    {
        title:"dummy1",
        src: "http://dummyimage.com/600x400/000/fff&text=img1"
    },{
        title:"dummy2",
        src: "http://dummyimage.com/600x400/000/fff&text=img2"
    },
    {
        title:"dummy3",
        src: "http://dummyimage.com/600x400/000/fff&text=img3"
    },
    {
        title:"dummy4",
        src: "http://dummyimage.com/600x400/000/fff&text=img4"
    }
   ];

@Component({
    selector: 'photo-detail',
    template: `
    <div>
        <carousel class="photo-list" [elements]="photos" [config] = "carouselconfig" ></carousel>
    </div>
    `,
    styles:[`
		body{
			padding: 0;
			margin: 0;
		}
		carousel {
			display: block;
			height: auto;
			overflow: hidden;
			width: 100%;
			position: relative;
		}
		carousel li {
			display: block;
			float: left;
			width: calc(100% / 4);
			width: -webkit-calc(100% / 4);
		}
		
		carousel li img{
			width: 100%;
			height: auto;
		}
    `]
})
export class PhotoDetailComponent implements OnInit {
    photos: Photo[] = PHOTOS;
	photos1: Photo[];
	//carouselconfig:	CarouselConfig = new CarouselConfig();
	carouselconfig:	CarouselConfig;
    selectedPhoto: Photo;
	currentIndex: number = 0;
	totalLength: number = 0;
	//photocontent: CustomLightbox = new CustomLightbox();
	
	constructor() {
		//this.carouselconfig.itemCount = 1;
		this.carouselconfig = {
			itemCount: 2,
			showDots: true,
			showNav: true,
			animationSpeed: 0.5,
			autoplay: true,
			loop: true
		};
	}
    
	ngOnInit() {
		//this.photos1 = this.photos.slice(0,2);
	}
}