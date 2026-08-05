import os
import shutil

base_dir = "/home/angsuman/extra_spac/certificates"
sources = [os.path.join(base_dir, "My-Certificate"), os.path.join(base_dir, "Certificate")]
target_dir = os.path.join(base_dir, "Organized_Collection")

categories = {
    "LOR": ["lor", "recommendation", "p.k. sir", "j mam"],
    "Education_Degrees_Marks": ["mark", "degree", "matric", "hs ", "hs_", "msc", "migration", "pgdca"],
    "Identity_and_Personal": ["voter", "birth", "obc", "creamy", "photo", "img-", "whatsapp image", "angsuman das 001", "rps2018", "sign", "angsuman.jpg"],
    "Work_and_Achievements": ["experience", "appointment", "internship", "campus ambassador", "bota", "birding", "anandaram"],
    "Resumes": ["resume", "cv"],
    "Study_Materials": ["cheat_sheet", "pandas", "brochure", "scholarship", "training-program"],
}

os.makedirs(target_dir, exist_ok=True)
for cat in categories.keys():
    os.makedirs(os.path.join(target_dir, cat), exist_ok=True)
os.makedirs(os.path.join(target_dir, "Others"), exist_ok=True)

def categorize(filename, rel_path):
    lower_name = filename.lower()
    lower_path = rel_path.lower()
    
    if "lor" in lower_path.split(os.sep):
        return "LOR"
        
    for cat, keywords in categories.items():
        for kw in keywords:
            if kw in lower_name:
                return cat
    return "Others"

for source in sources:
    if not os.path.exists(source): continue
    for root, dirs, files in os.walk(source):
        if ".git" in root or "venv" in root: continue
        for file in files:
            file_path = os.path.join(root, file)
            rel_path = os.path.relpath(file_path, base_dir)
            cat = categorize(file, rel_path)
            
            # Handle filename collisions
            dest_folder = os.path.join(target_dir, cat)
            dest_path = os.path.join(dest_folder, file)
            counter = 1
            name, ext = os.path.splitext(file)
            while os.path.exists(dest_path):
                dest_path = os.path.join(dest_folder, f"{name}_{counter}{ext}")
                counter += 1
                
            shutil.copy2(file_path, dest_path)

print("Files organized successfully into", target_dir)
