Movie-Swiper App

This is a movie-selection app that uses The Movie Database API to get a list of movies for users to select from.

It was made using React.

The first user is presented with a movie, it's description, and the options to like, skip, or switch users.

![Screenshot1](https://user-images.githubusercontent.com/35352111/121030923-887b2080-c76f-11eb-8ed9-44310f1a16a3.png)

Movies that are liked are added to an array that is passed to the second user. Movies that are skipped are discarded. Upon switching to the second user, they are presented with a similar screen, except their movie list has been populated by the likes from user one. Movies that the second user also chooses to like are then displayed on the right of the screen, letting the users know what movies they both would be interested in seeing.

![Screenshot3](https://user-images.githubusercontent.com/35352111/121031151-b8c2bf00-c76f-11eb-8fc2-edc89ffd7cf8.png)

The second user may continue liking or skipping movies until the list of liked movies from user one is depleted.

![Screenshot2](https://user-images.githubusercontent.com/35352111/121031266-cf691600-c76f-11eb-8f93-6b7986078bfa.png)
