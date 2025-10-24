# e.l.f.iliate Mobile App Prototype

This is a mobile app prototype for the e.l.f.iliate platform, built with React Native and Expo.

## Project Structure

### Data Files

- `src/data/collections.ts` - Product collections data
- `src/data/posts.ts` - Social media posts data
- `src/data/influencers.ts` - Influencer profiles data
- `src/data/promotions.ts` - Promotional banners data

### Components

#### Common Components

- `src/components/common/Placeholder.tsx` - Placeholder component for images
- `src/components/common/Header.tsx` - App header component

#### Home Screen Components

- `src/components/home/PromotionalBanner.tsx` - Promotional banners component
- `src/components/home/InfluencerCard.tsx` - Influencer card component for the home screen
- `src/components/home/PostCard.tsx` - Social media post card component

#### Profile Screen Components

- `src/components/profile/CollectionCard.tsx` - Product collection card component
- `src/components/profile/ProductCard.tsx` - Individual product card component
- `src/components/profile/ProfileHeader.tsx` - Influencer profile header component
- `src/components/profile/ProfileTabs.tsx` - Tab navigation for the profile screen

### Screens

- `src/screens/HomeScreen.tsx` - Main home screen
- `src/screens/ProfileScreen.tsx` - Influencer profile screen

## Features

The app prototype includes the following features:

1. Home screen with:

   - Promotional banners
   - Popular influencers carousel
   - Tab navigation between Posts and Influencers
   - Social media posts feed

2. Influencer profile screen with:
   - Profile header with bio and favorite button
   - Tab navigation between Posts, Collections, and Products
   - Posts feed from the influencer
   - Product collections curated by the influencer
   - Individual products recommended by the influencer

## Running the App

To run the app:

```bash
cd elfilliate/elfilliate-mobile
npx expo start
```

This will start the Expo development server. You can then run the app on:

- iOS simulator
- Android emulator
- Physical device using the Expo Go app
- Web browser (limited functionality)

## Design Implementation

This prototype is based on the Figma design provided, implementing the key screens and components with a focus on:

1. Visual design and layout
2. Navigation structure
3. Content organization
4. User interaction patterns

The app uses placeholder images and dummy data to demonstrate the functionality.
