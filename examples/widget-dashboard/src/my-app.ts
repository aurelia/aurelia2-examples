import { ExchangeComponent } from './components/exchange-component';
import { NotesComponent } from './components/notes-component';
import { GeoipComponent } from './components/geoip-component';
import { DogComponent } from './components/dog-component';
import { DateComponent } from './components/date-component';

export class MyApp {
  public components = [
    NotesComponent,
    GeoipComponent,
    DateComponent,
    ExchangeComponent,
    DogComponent
  ];
}