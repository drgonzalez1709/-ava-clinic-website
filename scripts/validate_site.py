#!/usr/bin/env python3
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse
import sys
ROOT=Path(__file__).resolve().parents[1]
class Parser(HTMLParser):
    def __init__(self):super().__init__();self.links=[];self.images=[];self.title=False;self.desc=False
    def handle_starttag(self,tag,attrs):
        d=dict(attrs)
        if tag=='a' and d.get('href'):self.links.append(d['href'])
        if tag=='img':self.images.append(d)
        if tag=='title':self.title=True
        if tag=='meta' and d.get('name')=='description' and d.get('content'):self.desc=True
errors=[]
html_files=list(ROOT.rglob('*.html'))
for file in html_files:
    p=Parser();p.feed(file.read_text(encoding='utf-8'))
    if not p.title:errors.append(f'{file.relative_to(ROOT)}: falta <title>')
    if not p.desc:errors.append(f'{file.relative_to(ROOT)}: falta meta description')
    for img in p.images:
        if not img.get('alt'):errors.append(f'{file.relative_to(ROOT)}: imagen sin alt')
    for href in p.links:
        if href.startswith(('#','mailto:','tel:','https://','http://','javascript:')):continue
        target=(file.parent/href.split('#')[0]).resolve()
        if href and not target.exists():errors.append(f'{file.relative_to(ROOT)}: enlace roto {href}')
if errors:
    print('\n'.join(errors));sys.exit(1)
print(f'OK: {len(html_files)} páginas HTML validadas; enlaces internos correctos.')
