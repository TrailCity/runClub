# RunClub

_IMPORTANT!_ DO \*NOT\* USE `react-native link`!!! YOU WILL BREAK REACT-NATIVE-MAPS!
I DON'T KNOW WHY! THERE ARE RECOVERY PROTOCOL, BUT YOU MAY BE NUKING THE PROJECT!
Use `react-native link LIB_NAME_HERE`!!!!!

Notes on `package.json`:

- Name _IS_ RunClub
- The first six are Amazon things, and they're also the reason why there's `react-apollo`
- The seventh thing, `graphql-tag`, is also there because Amazon happened, can't imagine trying to go back now, though. May need to branch to see what I could strip, as far as dependencies go
- Then we've got
- React
- React Native
- Deck Swiper
- Maps
- Splash Screen
- Navigation
- Redux and friends
- Styled Components
- UUID
