# Documentation

## Index Layout

The index file has two View components that will wrap everything. The first is a SafeAreaView that sound keep everything in sight on all phone models. You shouldn't need to use this component anywhere else everything should be wrapped in it. The second is an inner view component that is centered and is only 90% of the width of the screen. If you notice the Figma design everything has this margin. These two views should wrap everything and should not be altered, everything else will be up to you.

The fonts, as mentioned below, load in async. So, in addition to these view wrappers it is also wrapped in a ternary operator that brings up a loading screen when the fonts are not loaded yet, and then shows your code when they are loaded. So technically this should be the entry point and will wrap then entire app.

## Fonts

The useFont hook at the top of the index file loads the custom font file. The files are held in './assets/Plus-Jakarta-Sans'. The hook is async so the root component must wait for it to load before the rest of the app loads

In the types FontTypes, the regular and italic ones are variable fonts which should be responsive to to changes in font weighting. If you find it insufficient, the font folder also has a 'static' folder with each specific style of weighting if you wish to import a fixed type of font style.

For a better look at all the font weights and information, check out the link for the specific font family: https://fonts.google.com/specimen/Plus+Jakarta+Sans

## Components

### Block "Component"

To understand this section, look at the Figma link below for the Location screen:
https://www.figma.com/file/7MJeb71VIuG0GqMT4UNAmU/adventsapp?type=design&node-id=62-6400&mode=design&t=1vF1JO9EkTbPru7P-0

If you look very closely, you will notice that there is a white block that contains all the text fields. This type of style of floating blocks of information is repeated throughout the app, but since it's just a specific way of stacking Views, you can't make a custom component for this set up (or I am just too stupid to figure out how to do it neatly). If you wish to have these block "components", use the following setup:

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

The black button at the bottom of the page is the primary button components. It takes a title and returns a callback notification when the button is pressed. The 'PrimaryButtonTypes' type has most of the options you need but this can take a custom string. The button is fixed to the bottom of it's container, so be sure to keep it outside of custom components so it lines up with the bottom of the parent component. For instance:

```
import { PrimaryButtonTypes } from '../utils/advent-types';

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
            <PrimaryButton title={PrimaryButtonTypes.add_event} isPressed={() => [insert preferred methods here]}/>
        </View>
    )
}

```

### Secondary Button Component

Need a button that is just clickable text like the 'Forgot Password' button on this Sign In screen example (https://www.figma.com/file/7MJeb71VIuG0GqMT4UNAmU/adventsapp?type=design&node-id=62-2244&mode=design&t=7WjwSMVpJkTGeOzB-0)? Introducing the secondary button component! Unlike the primary button component, it is not styled to be in a fixed position, so you can incorporate it anywhere in your JSX. Like the Primary Button, it requires a title that is either a custom string or a predefined SecondaryButtonType, and returns a callback notifying the parent when it has been clicked.

### Icon Block

Need an icon and a line of neighboring line of text like shown here (https://www.figma.com/file/7MJeb71VIuG0GqMT4UNAmU/adventsapp?type=design&node-id=62-6481&mode=design&t=8kct2cbwN7jLgiVx-0)? Use the Icon Block for this effect. It take two parameters, an IconBlockTypes icon and text string.

**_If you wish to update with more icons in the future, do the following_**

1. Go to `./utils/advent-types.ts` and find "enum IconBlockTypes"
2. Add a descriptor of the icon you are adding
3. Go to https://icons.expo.fyi/Index to find an icon you want
4. Select the icon from the website and it will give you instructions to import. Import packages to the file `./components/common/IconBlock.tsx`
5. Add you component to the end of the ternary operator.
   - For those unfamiliar. The way it works is in the form {evaluation ? codeIfTrue : codeIfFalse}
   - To add a new icon component you need to chain ternary operators together in the form {evaluation1 ? codeIfEval1True : evaluation2 ? codeIfEval2True : codeIfEval1&2False}

Example:
Currently the icon section looks like this:

```
<View style={blockStyles.iconBlockIcon}>
    {props.icon === IconBlockTypes.info ?
    <Ionicons name="ios-information-circle-outline" size={iconSize} color={IconBlockColor} />
    :
    props.icon === IconBlockTypes.map_marker ?
    <Feather name="map-pin" size={iconSize} color={IconBlockColor} />
    :
    <MaterialCommunityIcons name="clock-outline" size={iconSize} color={IconBlockColor} />
    }
</View>
```

If you wanted to add more icons, you would do it as so:

```
<View style={blockStyles.iconBlockIcon}>
    {props.icon === IconBlockTypes.info ?
    <Ionicons name="ios-information-circle-outline" size={iconSize} color={IconBlockColor} />
    :
    props.icon === IconBlockTypes.map_marker ?
    <Feather name="map-pin" size={iconSize} color={IconBlockColor} />
    :
    props.icon === IconBlockTypes.clock ?
    <MaterialCommunityIcons name="clock-outline" size={iconSize} color={IconBlockColor} />
    :
    props.icon === IconBlockTypes.hypothetical_new_icon_1 ?
    <FakeIcon name="hypothetical-icon-1" size={iconSize} color={IconBlockColor}>
    :
    <FakeIcon name="hypothetical-icon-2" size={iconSize} color={IconBlockColor}>
    }
</View>
```

...and so on, and so forth

### Static Chip

A chip is a component that has an icon and a small amount of text in a self contained box. Check the location and date markers on this screen for reference: https://www.figma.com/file/7MJeb71VIuG0GqMT4UNAmU/adventsapp?type=design&node-id=62-3629&mode=design&t=AN1qJksETeM7veYx-0

It has 3 required parameters

1. Icon: StaticChipTypes. Select which icon you want. As always if you add more icons be sure to add a new descriptor to this enum
2. Text: string. The text you want to display
3. Width: number. I couldn't get it to dynamically resize based on it's internal contents, so for now you gotta define the size

As with Icon blocks, if you want to add more icons do the same thing for the StaticChip.tsx file

### TextField Component

For TextInput components that match the UI/UX of this app, use the custom TextField component.

The only required property is currentText, which is a callback to send the current input to the parent component. It can be called like so:

```
<TextField currentText={(text) => [insert method here]}/>
```

But there is so much more! Optional props exist to make this components a one size fits all for text inputs

1. defaultText: string - sets the text you want to appear in a blank input field
2. isMultiline: boolean - indicate whether you want a single line input field or a big block to put multiple lines of text input
3. keyboard: TextInputProps["inputMode"] - defaults to standard keyboard, but technically you can input any type of keyboard this component supports (more info here: https://reactnative.dev/docs/textinput#keyboardtype)

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

## Tabview

https://reactnavigation.org/docs/tab-view/

## Stripe

https://docs.expo.dev/versions/latest/sdk/stripe/
https://stripe.dev/stripe-react-native/api-reference/index.html
