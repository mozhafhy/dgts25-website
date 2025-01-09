import os
from PIL import Image

# ! Ini adalah program yang aku gunakan untuk meng-compress semua gambar yang ada di sini.
def resize(init_path, w=750, h=750, qual=95):
  for (dirs, _, images) in os.walk(init_path, topdown=True):
    for image in images:
      try:
        loc = f'{dirs}/{image}'
        img_to_compress = Image.open(loc)
        img_rgb = img_to_compress.convert('RGB')
        img_rgb.save(loc)
        
        img_to_compress = Image.open(loc)
        compressed_size = (w, h)
        img_to_compress.thumbnail(compressed_size)
      
        # ! Save the resized image
        print(f'loc: {loc} || {os.path.basename(dirs)} success')
        img_to_compress.save(loc, quality=qual)
      
      except:
        print(f'loc: {loc} || {os.path.basename(dirs)} failed')
        os.remove(path=loc)
        replacement = open(f'{dirs}/{image.removesuffix('.jpg')}.txt', 'w', encoding='utf-8')
        replacement.write('Seems like this image is corrupted while being converted, sorry')
        replacement.close()

source = "D:/Backup/dummy"
resize(source)