#Bitmap Transformer

This is Max & Ron's version of the Bitmap Transformer for Code 401 JS.

The bitmap.bmp file is initially read in, saving both the buffer data itself, and creating an object that contains the header data from the bitmap file.

Once the file is read in, three different transforms alter the original bitmap.bmp file:
- A transform which grayscale's the bitmap colors
- A transform which inverts color values in the bitmap image
- A transform which scales the color palette a green hue
The results of these transforms can be seen in the newBM directory.

Dependencies for the project are listed in the package.json file.
