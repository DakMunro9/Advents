enum Measurements {
    metric,
    imperial
}

//These have to be defined as strings or async storage won't work
enum AsyncKeys {
    lat = "LATITUDE",
    lon = "LONGITUDE"
}

enum FontTypes {
    jakarta_regular = 'Plus-Jakarta-Sans-Var',
    jakarta_italic = 'Plus-Jakarta-Sans-Var-Italics',
    jakarta_semibold = 'Plus-Jakarta-Sans-SemiBold'
}

enum PrimaryButtonTypes {
    continue = 'Continue',
    checkout = 'Checkout',
    pay = 'Pay Now',
    partiful = 'Connect To Partiful',
    set = 'Set',
    save = 'Save',
    more = 'More Info',
    signin = 'Sign In',
    signup = 'Sign Up',
    bus_signin = 'Business Sign In',
    bus_signup = 'Business Sign Up',
    upgrade = 'Upgrade',
    code = 'Send Code',
    create = 'Create an Account',
    list = "List Your Services",
    promote = "Promote",
    add_event = 'Add Event'
}

enum SecondaryButtonTypes {
    password = 'Forgot Password?',
    create = 'Create Account',
    bus_create = 'Create Business Account',
    signin = 'Sign In',
    bus_signin = 'Business Sign In',
    skip = "Skip"
}

enum IconBlockTypes {
    info,
    map_marker,
    clock
}

export { Measurements, AsyncKeys, PrimaryButtonTypes, SecondaryButtonTypes, FontTypes, IconBlockTypes }