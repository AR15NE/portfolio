import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  ngAfterViewInit() {
    const markers = document.querySelectorAll('.timeline-marker');
    const tooltip = document.getElementById('tooltip');

    if (tooltip) {
      markers.forEach(marker => {
        marker.addEventListener('mouseover', function() {
          const milestone = marker.getAttribute('data-milestone');
          if (milestone) {
            tooltip.textContent = milestone;
            tooltip.style.display = 'block';
            tooltip.style.top = `${(marker as HTMLElement).offsetTop - 30}px`;
            tooltip.style.left = `${(marker as HTMLElement).offsetLeft}px`;
          }
        });

        marker.addEventListener('mouseout', function() {
          tooltip.style.display = 'none';
        });
      });
    }
  }
}
