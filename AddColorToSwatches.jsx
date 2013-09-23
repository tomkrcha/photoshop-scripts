var red = 255;
var green = 0;
var blue = 0;
var name = "Red";
//
var addColorDescriptor = new ActionDescriptor();
// Get reference to Swatches panel
var swatchesPanelReference = new ActionReference();
swatchesPanelReference.putClass(stringIDToTypeID('colors'));
addColorDescriptor.putReference(stringIDToTypeID('null'), swatchesPanelReference);
// Setup a swatch and give it a name
var descriptorSwatch = new ActionDescriptor();
descriptorSwatch.putString( stringIDToTypeID('name'), name);
// Add RGB color information to the swatch
var descriptorColor = new ActionDescriptor();
descriptorColor.putDouble(stringIDToTypeID('red'), red);
descriptorColor.putDouble(stringIDToTypeID('grain'), green); // grain = green
descriptorColor.putDouble(stringIDToTypeID('blue'), blue);
// Add RGB to the swatch
descriptorSwatch.putObject( stringIDToTypeID('color'), stringIDToTypeID('RGBColor'), descriptorColor);
// Add swatch to the color descriptor
addColorDescriptor.putObject( stringIDToTypeID('using'), stringIDToTypeID('colors'), descriptorSwatch);
// Send to Photoshop
executeAction( stringIDToTypeID('make'), addColorDescriptor, DialogModes.NO);