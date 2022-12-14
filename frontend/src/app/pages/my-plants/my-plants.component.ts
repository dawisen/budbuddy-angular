import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-plants',
  templateUrl: './my-plants.component.html',
  styleUrls: ['./my-plants.component.scss'],
})
export class MyPlantsComponent implements OnInit {
  currentId: string | null = null;
  currentPlant: { id: string; name: string } | null = null;

  plants = [
    {
      id: '0',
      name: 'Aluminum Plant',
      level: 'Easy',
      water: 'once every week',
      sunlight: 'bright light',
      fertilizer: 'every two weeks',
      picture: 'https://www.guide-to-houseplants.com/images/aluminum-plant.jpg',
      owned: false,
    },
    {
      id: '1',
      name: 'Baby Rubber Plant',
      level: 'Easy',
      water: 'once every week',
      sunlight: 'bright, indirect light',
      fertilizer: 'every two weeks',
      picture:
        'https://www.guide-to-houseplants.com/images/peperomia-obtusifolia-window.jpg',
      owned: false,
    },
    {
      id: '2',
      name: 'Caladium Plant',
      level: 'Medium',
      water: 'once every week',
      sunlight: 'bright, indirect light',
      fertilizer: 'every two weeks',
      picture:
        'https://www.guide-to-houseplants.com/images/caladium-leaves.jpg',
      owned: false,
    },
    {
      id: '3',
      name: 'Dragon Tree',
      level: 'Medium',
      water: 'once every week',
      sunlight: 'bright, indirect light',
      fertilizer: 'every two weeks',
      picture: 'https://www.guide-to-houseplants.com/images/dragon-tree.jpg',
      owned: false,
    },
    {
      id: '4',
      name: 'Dumb Cane',
      level: 'Hard',
      water: 'every two weeks, thoroughly',
      sunlight: 'bright, indirect light',
      fertilizer: 'every two weeks',
      picture: 'https://www.guide-to-houseplants.com/images/dumb-cane.jpg',
      owned: false,
    },
    {
      id: '5',
      name: "Elephant's Ear",
      level: 'Medium',
      water: 'once every week',
      sunlight: 'bright, indirect light',
      fertilizer: 'every two weeks',
      picture: 'https://www.guide-to-houseplants.com/images/elephantsear.jpg',
      owned: false,
    },
    {
      id: '6',
      name: 'Fiddle Leaf Fig',
      level: 'Hard',
      water: 'every two weeks, thoroughly',
      sunlight: 'indirect light',
      fertilizer: '3 times a year',
      picture: 'https://www.guide-to-houseplants.com/images/fiddleleaffig.jpg',
      owned: false,
    },
    {
      id: '7',
      name: 'Friendship Plant',
      level: 'Hard',
      water: 'every two weeks',
      sunlight: 'moderate to bright, indirect light',
      fertilizer: 'monthly',
      picture:
        'https://www.guide-to-houseplants.com/images/friendshipplant.jpg',
      owned: false,
    },
    {
      id: '8',
      name: 'Lady Palm',
      level: 'Medium',
      water: 'every two weeks',
      sunlight: 'bright, indirect light',
      fertilizer: 'monthly',
      picture: 'https://www.guide-to-houseplants.com/images/lady-palm.jpg',
    },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.currentId = params.get('id');
      console.log('id: ', this.currentId);
      if (this.currentId) {
        this.setCurrentPlant(this.currentId);
      }
    });
  }

  setCurrentPlant(id: string) {
    console.log('setting currentPlant id');
    this.currentPlant = this.plants.find((plant) => plant.id === id) || null;
  }
}
