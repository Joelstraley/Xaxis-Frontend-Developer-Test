# Xaxis-Frontend-Developer-Test

Each folder contains an Index.html file that can be copied in a browser to be viewed locally. 

Things of note:

- I was unable to obtain the files for the Avenir font. It is a paid font so I used a Google Fonts equivilant: Mulish.
  
- The Javascript files are all essentially the same, except for in the case of 728x90 and a minor change in 160x600.
    - This could be DRY'd up by keeping one file in the global "assets" folder. I chose not to do this to avoid confusion.
      - The minor change in 160x600 involves changing the color of the "USE AS DIRECTED" text.
       This text is always purple in this version so no change was needed, so this was omitted from the javascript function.
      - In the 728x90 file, the button is created on the initial run of the javascript file (not timed out, as in the others).
       This was due to formatting, which would go askew when the button was added in later at this resolution.
  
- The Javascript files have the copy text, button text and button URL as the first variables at the top of the file.
    This was done to create easy editing access in the future if text/URLs need to be updated.  

Enjoy! 
