import { Component, OnInit, Input } from '@angular/core';
import { DogInfo } from '../models/dog-info';
import { DogServiceService } from '../services/dog-service.service';

@Component({
  selector: 'app-dog-search',
  templateUrl: './dog-search.component.html',
  styleUrls: ['./dog-search.component.scss']
})
export class DogSearchComponent implements OnInit {

  searchName: string;
  @Input() foundContent: DogInfo;
  // content: any;

  constructor(private dogService: DogServiceService) {
    this.searchName = "";
    this.foundContent = { id: 0, dogName: '', ownerName: '', amountDue: 0, hadFun: true};
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  search() {
    this.dogService.getContentByName(this.searchName).subscribe(contents => {
      this.foundContent = contents.filter(content => content.dogName === this.searchName)[0];
    });
  }
}
