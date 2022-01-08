import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'ab-me-home-page',
  template: `
    <section #homePageBody>
      <div class="about-me-body" (window:resize)="onResize($event)"
           [style.height.px]="homePageBodyHeight">
        <div class="home-page-picture-and-paragraph">
          <div class="home-page-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium debitis doloribus, error
            fuga laborum maxime nesciunt provident quae quam quia, quod ratione sint, totam velit. Amet pariatur
            quibusdam unde! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolor doloribus eaque
            eos eum fugiat ipsum laborum minima, mollitia non omnis praesentium, quasi quibusdam quos recusandae
            repellendus tenetur voluptates voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Adipisci officiis ratione totam. Accusantium ad autem consequuntur debitis deleniti facilis magnam maiores
            natus nulla pariatur? Atque earum illum ipsa magni porro.
          </div>
          <div class="home-page-picture">
            <img class="profile-image" src="./assets/images/kaan-photo_prev_ui.png" alt="image">
          </div>
        </div>
      </div>
    </section>

  `,
  styleUrls: [`home-page.component.scss`]
})
export class HomePageComponent implements OnInit {

  homePageBodyHeight: number | undefined;

  constructor() {

  }

  ngOnInit(): void {
    this.homePageBodyHeight = window.innerHeight - 60;
    console.log(this.homePageBodyHeight)
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.homePageBodyHeight = event.target.innerHeight - 60;
  }
}
