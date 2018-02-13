import { Player } from './../../models/player';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MatSelectionList, MatSelectionListChange, MatListOption } from '@angular/material';
import * as _ from 'lodash'
import { FootballTeam } from '../../models/football-team';
import { SideColor } from '../../enums/side-color.enum';
import { PlayerService } from '../../shared/services/PlayerService';
import { PlayersFirebaseService } from '../../shared/services/players-firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private _playerService: PlayersFirebaseService
  ) { }

  @ViewChild('players') list: MatSelectionList;
  
  public playersList : Observable<Player[]>

  public readTeam : FootballTeam = null;
  public blueTeam : FootballTeam = null;

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

  ngOnInit() {
    this.playersList = this._playerService.players;
  }
  
  ngAfterViewInit() {
    this.list.selectionChange.subscribe((listSelectionEvent : MatSelectionListChange)=>{
      let selectedCount = listSelectionEvent.source.selectedOptions.selected.length;

      if(selectedCount > 4){
        listSelectionEvent.option.selected = false;
      }
    })
  }
}
