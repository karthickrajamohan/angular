import { Component, EventEmitter, OnInit, Input, Output, ElementRef } from '@angular/core';
import { Photo } from './photo';
import { CarouselConfig } from './carousel-config';

@Component({
    moduleId: module.id,
    selector: 'carousel',
    template: `
    <div>        
        <ul class="item-list carousel" [style.width]="carouselWidth" [style.transform] = "transformNode" [style.transition] = "transitionValue" >
			<div class="carousel-stage">
				<li *ngFor="let photo of photos; let i = index;">            
                <img [src]="photo.src" />
            </li>
			</div>
        </ul>
		<div class="carousel-controls">
			<div class="carousel-nav" >
				<div class="carousel-prev" [style.display]="PreviousNav" (click)="previousItem()" >< prev</div>
				<div class="carousel-next" [style.display]="NextNav" (click)="nextItem()" >next ></div>
			</div>
			<div class="carousel-dots" [style.display]="showDots">
				<div *ngFor="let dot of dotCounts;" class="carousel-dot">
					<span></span>
				</div>
			</div>
		</div>
    `,
	styles:[`
	li {
		display: inline;
	}
		
	`]
})
export class CarouselComponent implements OnInit {   
	node:ElementRef = null;
	nodeCount:number = 0;
	innerWidth: number = 0;
	elementW: number = 0;
	carouselW: number = 0;
	dotCounts: number[] = [1];
	@Input() config:CarouselConfig;
	@Input() elements : Photo[];
	photos:Photo[];
	
	PreviousNav: string = "";
	NextNav: string = "";
	showDots: string = "";
	transformNode: string = "";
	carouselWidth: string = "";
	transformValue: number = 0;
	transitionValue: string = "";
	initOnce:boolean = false;
	
	currentItemNumber: number = 1;
	
    constructor(element:ElementRef) { 
		this.node = element;
	}
	
	getNodeCounts(): number{
		return this.nodeCount;
	}

	nextItem(){
		this.photos =this.elements.slice(2,4);		
	}
	
	previousItem(){
		this.photos =this.elements.slice(0,2);	
	}
	
	playcarousel(){
		
	}
	
	ngAfterContentInit() {
		this.init();

	}
	
	init(){

	}
	
    ngOnInit() {
		this.nodeCount = this.elements.length;

		this.photos = this.elements.slice(0,2);		
	}	
	
}