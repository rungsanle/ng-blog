import { Article } from "./article";

export const ARTICLES: Article[] = [
    {
        id: 1,
        title: 'My first article',
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis fermentum laoreet. Donec pretium fermentum tortor, quis egestas ipsum rhoncus ac. Nulla vel lectus tincidunt, gravida odio et, consectetur erat. Morbi quis sapien interdum, condimentum urna ac, pharetra tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris rutrum nibh sed justo ultricies luctus. Nullam vulputate mi massa, quis blandit justo porttitor et. Aliquam molestie lobortis viverra. Sed pellentesque malesuada velit. Vivamus ultrices mattis ultricies. Maecenas maximus nisi eros, vel sagittis turpis pellentesque a. Donec blandit metus quis sem convallis rutrum. Nulla id arcu risus. Vivamus gravida eros vel varius gravida. Pellentesque id lorem scelerisque dolor consectetur molestie.</p>',
        description: "This is by first article! It's great. Please read it. :)",
        key: 'my-first-article',
        date: new Date(),
        imageUrl: 'https://angular.io/assets/images/logos/angular/angular.png'
    },
    {
        id: 2,
        title: 'My second article',
        content: '<p>Phasellus non sodales turpis. Donec ultricies rutrum risus ut sollicitudin. Sed mollis semper sapien quis sodales. Aliquam ullamcorper, ipsum ut consequat mattis, velit metus egestas turpis, non convallis magna tortor et mauris. Vestibulum finibus lacus et tortor facilisis, non lacinia tellus varius. Mauris eros diam, suscipit sit amet nunc quis, tincidunt elementum dui. Proin dictum eget eros eu posuere. Mauris molestie vulputate nulla eget lacinia. Integer ut leo erat. Vivamus velit sem, rutrum sit amet eros vitae, facilisis pellentesque justo. Nulla nisi justo, auctor non arcu sit amet, fringilla ultricies velit.</p>',
        description: "Also a great article!",
        key: 'the-second-article',
        date: new Date(),
        imageUrl: 'https://angular.io/assets/images/logos/angular/angular_solidBlack.png'
    },
];
