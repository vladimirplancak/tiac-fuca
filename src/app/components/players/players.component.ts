import { Player } from './../../models/player';
import { Component, OnInit } from '@angular/core';
import { PlayersFirebaseService } from '../../shared/services/players-firebase.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  constructor(
    private _playerService: PlayersFirebaseService,
    private _fb : FormBuilder
  ) { 
    this.form = this._fb.group({
      name: ['', Validators.required],
      imgUrl: ['']
    })
  }


  public form : FormGroup
  public players : Observable<Player[]>;

  public addPlayer(){
    if(!this.form.invalid){
      let playerName = this.form.get('name').value;
      let playerImgUrl = this.form.get('imgUrl').value;

      var newPlayer = Player.new(playerName, playerImgUrl);

      this._playerService.addPlayer(newPlayer).subscribe(()=>{
        this.form.reset();
      });
    }
  }

  public removePlayer(player : Player){
    this._playerService.deletePlayer(player);
  }


  ngOnInit() {
    this.players = this._playerService.players;
  }

}
