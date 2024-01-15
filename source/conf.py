# Configuration file for the Sphinx documentation builder.
#
# This file only contains a selection of the most common options. For a full
# list see the documentation:
# http://www.sphinx-doc.org/en/master/config

# -- Path setup --------------------------------------------------------------

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.
#
# import os
# import sys
# sys.path.insert(0, os.path.abspath('.'))


# -- Project information -----------------------------------------------------

project = 'Mohrscher Kreis'
copyright = u'Dr. Kai Kaßbohm'
author = u'Dr. Kai Kaßbohm'
release = ''
version = '<a href="https://drive.google.com/drive/folders/1PqWEN0BZXunZsGHD9-hy59V6xMMCAK8f?usp=sharing" style="color:#ffffff; font-weight: bold;">Dr. Kai</a>'
language = 'de'
master_doc = 'index'

# -- General configuration ---------------------------------------------------

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.

extensions = [
    "sphinx_design",
    'sphinx.ext.mathjax',
    # 'sphinx.ext.imgmath',
    'sphinx.ext.todo',
    # 'sphinx.ext.extlinks',
    'sphinx_copybutton',
    # 'sphinxcontrib.plantuml',
    'sphinxcontrib.spelling',     
    # 'sphinx_search.extension',
    # "sphinx_rtd_dark_mode",
    # "nbsphinx",
    # "sphinx_thebe",
    # "jupyter_sphinx",
    # "myst_nb", # funktioniert nicht alles.
    # "myst_parser", # schon enthalten in myst_nb!
    # https://executablebooks.org/en/latest/
    ]

mathjax3_config = {
    'extensions': ["tex2jax.js","TeX/AMSmath.js","TeX/AMSsymbols.js", "TeX/autobold.js"],
    # 'jax': ['input/TeX', 'output/HTML-CSS'],
}
# plantuml_output_format = "svg"


spelling_lang='de'
spelling_word_list_filename='wordlist.txt'
spelling_exclude_patterns=[
    "A/2/7_equiv-stress/index.rst",
    "A/1/1_equilibrium/index.rst",
    "A/TM_0/3_taylor/index.rst",
    "FEM/B2/B2.A/ipe-en.rst",
    ]

html_codeblock_linenos_style = 'table' # um die Line Numbers nicht mit zu kopieren


imgmath_latex_preamble = '\\usepackage{xcolor}'
# extlinks = {
#     'wiki': ('https://en.wikipedia.org/wiki/%s',''),
#     'de-wiki': ('https://de.wikipedia.org/wiki/%s',''),
#     }

numfig = True
numfig = False
todo_include_todos = False


# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.

exclude_patterns = [
    # "about/*",
    "**index_en.rst",
    "**index-en.rst",
    "*.py",
    # Nur zeitweise excluden:
    # "TM_1/7_SG/1.7.H/*",            # --- auch bis 7.12.2019
    #
    # "TM_1/2_ZK/1.2.A*",
    # "TM_1/2_ZK/1.2.H/*",
    # "TM_1/3_GG/1.3.E/*",
    # "TM_1/4_SR/1_SP/1.4.1.E*",
    # "TM_1/5_AL/1.5.H*",
    # "TM_1/5_AL/1.5.K*",
    # "TM_1/7_SG/1.7.G/*",
    #
    # "TM_2/4_BB/3_SPN/2.4.3.F/*",
    # "TM_2/4_BB/3_SPN/2.4.3.Y/*",
    #
    # "TM_3/1_MP/1_KA/3.1.1.A*",
    # "TM_3/1_MP/1_KA/3.1.1.G*", #  23.11.2019 auskommentierte Aufgabenteile wieder einfügen
    # "TM_3/1_MP/1_KA/3.1.1.H*", #  23.11.2019 auskommentierte Aufgabenteile wieder einfügen
    # "TM_3/1_MP/2_KE/3.1.2.C*",
    # "TM_3/3_ST/3.3.A*",        #  23.11.2019
    # "TM_3/3_ST/3.3.Q*",        #  23.11.2019
    # "TM_3/4_SK/3.4.A*",
    # "TM_3/4_SK/3.4.E*",          #  23.11.2019 auskommentierte Aufgabenteile wieder einfügen
    # "TM_3/5_SL/3.5.E*",          #  23.11.2019 auskommentierte Aufgabenteile wieder einfügen
    # "TM_3/5_SL/3.5.F*",
    #
    # Aufgaben auf Englisch:
    #
    #
    #
    # Nicht so gute Aufgaben oder keine wirklichen Aufgaben:
    # "TM_1/9_RB/1.9.C*",
    # "TM_2/1_ZD/2.1.A/*",
    # "TM_3/4_PR/3.4.A/*",
    # "TM_3/3_ST/3.3.X-1/*",
    #
    # FEM-Aufgaben:
    # "TM_2/1_ZD/2.1.C-FEM/*",
    # "TM_2/1_ZD/2.1.N-FEM/*",
    # "TM_2/4_BB/2_BL/2.4.2.J-FEM/*",
    # "A/TM_2/2_BL/fem*/*",
    # "TM_2/4_BB/2_BL/2.4.2.L/*",
    #
    # Sonstige
    # "Excluded/*",
    # "gTTS_dont_delete/*",
    # "tm-snippets/*",
    # "TM_B/*",
    # "TM_3/6_PR/*",
    # "A/TM_3/X_missing",
    ]

    
# -- Options for HTML output -------------------------------------------------
html_theme = 'sphinx_rtd_theme'

# templates_path = ['_templates']
html_static_path = ['_static']

# These paths are either relative to html_static_path:
html_css_files = [
    'css/custom.css',
]

locale_dirs = ['locale/'] 

html_title = 'Mohr'
html_short_title = 'Mohr'

today_fmt = '%d. %B %Y'
html_last_updated_fmt = '%d. %B %Y. Impressum: https://www.tm-tutor.de/'
# html_last_updated_fmt = None



html_show_sphinx = False
html_show_sourcelink = False
html_copy_source = False
html_show_copyright = True
# html_show_last_updated = False
html_favicon = "logo.ico"
# html_favicon = "logo-colored.png"


html_theme_options = {
    'analytics_id': 'G-E8EF9G9ZVG',
    # 'style_external_links': True,
    'collapse_navigation': True,
    # 'sticky_navigation': True,
    'navigation_depth': 10,
    'logo_only': False,
    'display_version': True,
    'prev_next_buttons_location': "bottom",
    # 'prev_next_buttons_location': None,
    # 'style_nav_header_background': '#2980b9',
    'style_nav_header_background': '#343131',
    # 'style_nav_header_background': '#1abc9c',
}
