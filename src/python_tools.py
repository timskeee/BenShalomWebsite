from PIL import Image

# Open the GIF
input_path = "Neuron11.gif"  # Change to your GIF filename
output_path = "Neuron11_cropped.gif"

# Open the image
im = Image.open(input_path)

# Define crop box (left, upper, right, lower)
# Adjust these values to crop out the unwanted areas
crop_box = (80, 0, 900, 700)  # Example values, tune as needed

frames = []
try:
    while True:
        cropped = im.crop(crop_box)
        frames.append(cropped.copy())
        im.seek(im.tell() + 1)
except EOFError:
    pass

# Save the cropped GIF
frames[0].save(
    output_path,
    save_all=True,
    append_images=frames[1:],
    loop=0,
    duration=im.info['duration'],
    disposal=2
)

print("Cropped GIF saved as", output_path)