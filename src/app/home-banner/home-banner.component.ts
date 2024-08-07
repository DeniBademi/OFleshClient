import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router} from "node_modules/@angular/router";
import KeenSlider, { KeenSliderInstance } from "keen-slider"

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss', "../../../node_modules/keen-slider/keen-slider.min.css"]
})
export class HomeBannerComponent implements OnInit {

  @Input() imageUrls: string[] = []
  @Input() imageLinks: string[] = []

  @ViewChild("sliderRef") sliderRef: ElementRef<HTMLElement>

  currentSlide: number = 0
  dotHelper: Array<Number> = []
  slider: KeenSliderInstance = null

  constructor(public router: Router) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        loop: true,
        initial: this.currentSlide,
        slideChanged: (s) => {
          this.currentSlide = s.track.details.rel
        },

      },
      [
        (slider) => {
          let timeout
          let mouseOver = false
          function clearNextTimeout() {
            clearTimeout(timeout)
          }
          function nextTimeout() {
            clearTimeout(timeout)
            if (mouseOver) return
            timeout = setTimeout(() => {
              slider.next()
            }, 2000)
          }
          slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
              mouseOver = true
              clearNextTimeout()
            })
            slider.container.addEventListener("mouseout", () => {
              mouseOver = false
              nextTimeout()
            })
            nextTimeout()
          })
          slider.on("dragStarted", clearNextTimeout)
          slider.on("animationEnded", nextTimeout)
          slider.on("updated", nextTimeout)
        },
      ])
      this.dotHelper = [
        ...Array(this.slider.track.details.slides.length).keys(),

      ]
    })
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }
}
