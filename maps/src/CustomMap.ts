
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  }
  merkerContent(): string;
  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map; //defult modifier is public
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }


  addMarker(mappable: Mappable) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: mappable.location
    };

    marker.addListener('click', () => {
      const infowindow = new google.maps.InfoWindow({
        content: mappable.merkerContent();
      });
      infowindow.open(this.googleMap, marker);
    });
  }
}

