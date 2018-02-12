import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MatSelectionList, MatSelectionListChange, MatListOption } from '@angular/material';
import * as _ from 'lodash'
import { FootballTeam } from '../../models/football-team';
import { SideColor } from '../../enums/side-color.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }

  @ViewChild('players') list: MatSelectionList;
  
  public playerList = ['Bane', 'Ceca', 'Robert', 'Mita', 'Vlada', 'Limun', 'Vaske'];

  public readTeam : FootballTeam = null;
  public blueTeam : FootballTeam = null;

  ngOnInit() {
  }
  
  ngAfterViewInit() {
    this.list.selectionChange.subscribe((listSelectionEvent : MatSelectionListChange)=>{
      let selectedCount = listSelectionEvent.source.selectedOptions.selected.length;

      if(selectedCount > 4){
        listSelectionEvent.option.selected = false;
      }
    })
  }

  public randomize(){
    this.readTeam = null;
    this.blueTeam = null;
    let selectedValues = [];

    this.list.selectedOptions.selected.forEach((it)=>{
      selectedValues.push(it.value);
    });

    var shuffeldValues = _.shuffle(selectedValues);

    var teams = _.chunk(shuffeldValues, 2);

    if(teams.length === 2){
      this.readTeam = new FootballTeam(teams[0], SideColor.red);
      this.blueTeam = new FootballTeam(teams[1], SideColor.blue);
    }
  }
}
