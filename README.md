# Documentation

## Index Layout

The index file has two View components that will wrap everything. The first is a SafeAreaView that sound keep everything in sight on all phone models. You shouldn't need to use this component anywhere else everything should be wrapped in it. The second is an inner view component that is centered and is only 90% of the width of the screen. If you notice the Figma design everything has this margin. These two views should wrap everything and should not be altered, everything else will be up to you

## Fonts

The useFont hook at the top of the index file loads the custom font file. The files are held in './assets/Plus-Jakarta-Sans'. The hook is async so the root component must wait for it to load before the rest of the app loads

In the types FontTypes, the regular and italic ones are variable fonts which should be responsive to to changes in font weighting. If you find it insufficient, the font folder also has a 'static' folder with each specific style of weighting if you wish to import a fixed type of font style.

For a better look at all the font weights and information, check out the link for the specific font family: https://fonts.google.com/specimen/Plus+Jakarta+Sans

## Components

### Block "Component"

To understand this section, look at the Figma link below for the Location screen:
https://www.figma.com/file/7MJeb71VIuG0GqMT4UNAmU/adventsapp?type=design&node-id=62-6400&mode=design&t=1vF1JO9EkTbPru7P-0

If you look very closely, you will notice that there is a white block that contains all the text fields. This type of style of floating blocks of information is repeated throughout the app, but since it's just a specific way of stacking Views, you can't make a custom component for this set up. If you wish to have these block "components", use the following setup:

```
import { blockStyles } from '../utils/styles/BlockStyles';

<View style={blockStyles.block}>
    <View style={blockStyles.innerBlock}>
        <Text>Hello There</Text>
        <Text>General Kenobi</Text>
        <Text>You Are a Bold One</Text>
    </View>
</View>
```

### Primary Button Component

The black button at the bottom of the page is the primary button components. It takes a title and returns a callback notification when the button is pressed. The 'PrimaryButtonTitles' type has most of the options you need but this can take a custom string. The button is fixed to the bottom of it's container, so be sure to keep it outside of custom components so it lines up with the bottom of the parent component. For instance:

```
import { PrimaryButtonTitles } from '../utils/advent-types';

function RootComponent(){
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerView}>
                <ChildComponent />
            </View>
        </SafeAreaView>
    )
}

function ChildComponent(){
    return (
        <View>
            <View>
                <Random_Stuff />
            </View>
            <PrimaryButton title={PrimaryButtonTitles.add_event} isPressed={() => [insert preferred methods here]}/>
        </View>
    )
}

```

# Libraries

## Typescript with Expo

If any issues arise, here is the link to troubleshoot: https://docs.expo.dev/guides/typescript/

## AsyncStorage

Documentation for the async storage: https://docs.expo.dev/versions/latest/sdk/async-storage/
It looks like we are going to use Azure SQL for persistant data so we may need to remove this stuff in the future. But for now it's useful

## MapView

Mapview documentation: https://docs.expo.dev/versions/latest/sdk/map-view/

## expo router setup

https://docs.expo.dev/routing/installation/
