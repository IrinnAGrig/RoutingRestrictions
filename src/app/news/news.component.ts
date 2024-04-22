import { Component } from '@angular/core';

interface News {
  title: string;
  content: string;
  author: string;
  publishedDate: Date;
  category: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  newsList: News[] = [
    {
      title: "New Discovery in Science",
      content: "Scientists have made a groundbreaking discovery in the field of physics...",
      author: "John Doe",
      publishedDate: new Date("2024-04-01"),
      category: "Science"
    },
    {
      title: "Economy Recovers from Recession",
      content: "The economy has shown signs of recovery after a prolonged recession. Economic indicators are on the rise...",
      author: "Jane Smith",
      publishedDate: new Date("2024-04-05"),
      category: "Economy"
    },
    {
      title: "Sports Team Wins Championship",
      content: "The local sports team has won the championship for the first time in a thrilling match...",
      author: "Michael Johnson",
      publishedDate: new Date("2024-04-10"),
      category: "Sports"
    },
    {
      title: "Healthcare Breakthrough",
      content: "Researchers announce a major breakthrough in healthcare. A new treatment shows promising results in clinical trials...",
      author: "Emily Brown",
      publishedDate: new Date("2024-04-15"),
      category: "Health"
    },
    {
      title: "Climate Change Summit",
      content: "World leaders gather to address the urgent issue of climate change. Discussions focus on reducing carbon emissions and implementing renewable energy...",
      author: "David Wilson",
      publishedDate: new Date("2024-04-20"),
      category: "Science"
    },
    {
      title: "Economic Growth Forecast",
      content: "Analysts predict robust economic growth for the upcoming fiscal year. Investments in infrastructure and technology are expected to drive the expansion...",
      author: "Sarah Thompson",
      publishedDate: new Date("2024-04-25"),
      category: "Economy"
    },
    {
      title: "Athlete Breaks World Record",
      content: "An athlete has shattered a long-standing world record in track and field. The remarkable achievement has captivated sports fans worldwide...",
      author: "Daniel Lee",
      publishedDate: new Date("2024-04-28"),
      category: "Sports"
    },
    {
      title: "Medical Breakthrough in Cancer Research",
      content: "Scientists announce a significant breakthrough in cancer research. A new treatment approach shows promising results in clinical trials, offering hope to millions of patients...",
      author: "Rachel Carter",
      publishedDate: new Date("2024-04-30"),
      category: "Health"
    },
    {
      title: "Space Exploration Mission",
      content: "A new space exploration mission is launched to explore distant planets and search for signs of extraterrestrial life. Scientists hope to unlock the mysteries of the universe...",
      author: "Steven Adams",
      publishedDate: new Date("2024-05-02"),
      category: "Science"
    },
    {
      title: "Government Healthcare Initiative",
      content: "The government announces a new healthcare initiative aimed at improving access to quality healthcare services for all citizens. The initiative includes measures to reduce healthcare costs and expand coverage...",
      author: "Rebecca White",
      publishedDate: new Date("2024-05-05"),
      category: "Health"
    }
  ];

  
}
