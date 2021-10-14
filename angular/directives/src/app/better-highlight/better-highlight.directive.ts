import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
    @Input() defaultColor = 'transparent';
    @Input() highlightColor = 'blue'; // @Input('appBetterHighlight') is not necessary
    @HostBinding('style.backgroundColor') backgroundColor;

    constructor(private elRed: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit() {
        this.backgroundColor = this.defaultColor;
        // this.renderer.setStyle(this.elRed.nativeElement, 'background-color', 'blue');
    }

    @HostListener('mouseover') mouseover(eventData: Event) {
        // this.renderer.setStyle(this.elRed.nativeElement, 'background-color', 'blue');
        this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        // this.renderer.setStyle(this.elRed.nativeElement, 'background-color', 'transparent');
        this.backgroundColor = this.defaultColor;
    }
}
