Place your transparent logo file here as `logo.png` so the app can load it at `/logo.png`.

Recommended: use a PNG with a transparent background (alpha channel). If your logo currently has a white background, you can remove it locally with ImageMagick:

Install ImageMagick (Linux):

sudo apt update
sudo apt install imagemagick -y

Remove white background (example, with a fuzz tolerance):

magick convert input.png -fuzz 10% -transparent white output.png

Or (old-style convert):

convert input.png -fuzz 10% -transparent white output.png

The `-fuzz` value controls color tolerance; increase if some near-white pixels remain.

After you have `output.png` with transparency, copy it into the project:

cp output.png client/public/logo.png

Then refresh the running dev server (Vite will usually pick it up automatically).

If you'd like, upload the transparent PNG here and I can add it to the repo for you.