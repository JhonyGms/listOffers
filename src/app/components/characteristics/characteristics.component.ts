import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.css']
})
export class CharacteristicsComponent implements OnInit {
  
  data = []
  @Input() ids: any = []

  constructor(  ) { }

  async ngOnInit() {
  }


}
