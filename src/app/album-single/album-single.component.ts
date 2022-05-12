import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-single',
  templateUrl: './album-single.component.html',
  styleUrls: ['./album-single.component.scss']
})
export class AlbumSingleComponent implements OnInit {

  data = {
    album_type: "single",
    artists: [
        {
          external_urls: {
              spotify: "https://open.spotify.com/artist/1F8NZ8jILDmCFgCaWA2FP8"
            },
          href: "https://api.spotify.com/v1/artists/1F8NZ8jILDmCFgCaWA2FP8",
          id: "1F8NZ8jILDmCFgCaWA2FP8",
          name: "Lydia Baskow Trio",
          type: "artist",
          uri: "spotify:artist:1F8NZ8jILDmCFgCaWA2FP8"
        }
    ],
    available_markets: [
        "AD",
        "AE",
        "AG",
        "AL",
        "AM",
        "AO",
        "AR",
        "AT",
        "AU",
        "AZ",
        "BA",
        "BB",
        "BD",
        "BE",
        "BF",
        "BG",
        "BH",
        "BI",
        "BJ",
        "BN",
        "BO",
        "BR",
        "BS",
        "BT",
        "BW",
        "BY",
        "BZ",
        "CA",
        "CD",
        "CG",
        "CH",
        "CI",
        "CL",
        "CM",
        "CO",
        "CR",
        "CV",
        "CW",
        "CY",
        "CZ",
        "DE",
        "DJ",
        "DK",
        "DM",
        "DO",
        "DZ",
        "EC",
        "EE",
        "EG",
        "ES",
        "FI",
        "FJ",
        "FM",
        "FR",
        "GA",
        "GB",
        "GD",
        "GE",
        "GH",
        "GM",
        "GN",
        "GQ",
        "GR",
        "GT",
        "GW",
        "GY",
        "HK",
        "HN",
        "HR",
        "HT",
        "HU",
        "ID",
        "IE",
        "IL",
        "IN",
        "IQ",
        "IS",
        "IT",
        "JM",
        "JO",
        "JP",
        "KE",
        "KG",
        "KH",
        "KI",
        "KM",
        "KN",
        "KR",
        "KW",
        "KZ",
        "LA",
        "LB",
        "LC",
        "LI",
        "LK",
        "LR",
        "LS",
        "LT",
        "LU",
        "LV",
        "LY",
        "MA",
        "MC",
        "MD",
        "ME",
        "MG",
        "MH",
        "MK",
        "ML",
        "MN",
        "MO",
        "MR",
        "MT",
        "MU",
        "MV",
        "MW",
        "MX",
        "MY",
        "MZ",
        "NA",
        "NE",
        "NG",
        "NI",
        "NL",
        "NO",
        "NP",
        "NR",
        "NZ",
        "OM",
        "PA",
        "PE",
        "PG",
        "PH",
        "PK",
        "PL",
        "PS",
        "PT",
        "PW",
        "PY",
        "QA",
        "RO",
        "RS",
        "RW",
        "SA",
        "SB",
        "SC",
        "SE",
        "SG",
        "SI",
        "SK",
        "SL",
        "SM",
        "SN",
        "SR",
        "ST",
        "SV",
        "SZ",
        "TD",
        "TG",
        "TH",
        "TJ",
        "TL",
        "TN",
        "TO",
        "TR",
        "TT",
        "TV",
        "TW",
        "TZ",
        "UA",
        "UG",
        "US",
        "UY",
        "UZ",
        "VC",
        "VE",
        "VN",
        "VU",
        "WS",
        "XK",
        "ZA",
        "ZM",
        "ZW"
    ],
 external_urls: {
     spotify: "https://open.spotify.com/album/748FmeoAqlCY5Vu3fKXq8C"
    },
 href: "https://api.spotify.com/v1/albums/748FmeoAqlCY5Vu3fKXq8C",
 id: "748FmeoAqlCY5Vu3fKXq8C",
 images: [
        {
         height: 640,
         url: "https://i.scdn.co/image/ab67616d0000b27318263699c16f97adf819b717",
         width: 640
        },
        {
         height: 300,
         url: "https://i.scdn.co/image/ab67616d00001e0218263699c16f97adf819b717",
         width: 300
        },
        {
         height: 64,
         url: "https://i.scdn.co/image/ab67616d0000485118263699c16f97adf819b717",
         width: 64
        }
    ],
 name: "Nuages ​​Creux",
 release_date: "2020-12-02",
 release_date_precision: "day",
 total_tracks: 1,
 type: "album",
 uri: "spotify:album:748FmeoAqlCY5Vu3fKXq8C"
} 

  constructor() { }

  ngOnInit(): void {
  }

}
