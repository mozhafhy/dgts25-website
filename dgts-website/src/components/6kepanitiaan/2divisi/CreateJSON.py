import os
import json

isOddChild = False
json_obj = []
key = 0

for (dirs, _, files) in os.walk('D:/dgts25-website/dgts-website/src/components/kepanitiaan/divisi/img', topdown=True):
  if dirs == 'D:/dgts25-website/dgts-website/src/components/kepanitiaan/divisi/img':
    continue
  
  divisi = {
    "key" : key,
    "isOddChild" : None,
    "fotoCO" : "",
    "divisi" : "",
    "deskripsi" : "Something here",
    "foto" : []
  }
  
  dirname = os.path.basename(dirs)
  
  divisi["key"] = key
  divisi["isOddChild"] = isOddChild
  divisi["fotoCO"] = f"{dirs[31:]}/{files[0]}"
  divisi["divisi"] = dirname[1:]
  divisi["foto"] = [f"{dirs[31:]}/{file}" for file in files[1:]]
  
  json_obj.append(divisi)
  isOddChild = not isOddChild
  key += 1

# print(json_obj)
divs = open('Divisi.json', 'w', encoding='utf-8')
json.dump(json_obj, divs, ensure_ascii=False, indent=2)