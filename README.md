# MaterialDesignPrimeFacesStyle
Material Design for Primefaces CSS/jQuery

For developers who use PrimeFaces.

Here are some files to change the appearance of Primefaces.

Contribute, improve the files.

I'm not a good FrontEnd developer, so ignore or make the fonts better.

###### Input
```html
<div class="md-input-container">
  <p:inputText value="#{bean.name}" placeholder=" " required="true" />
  <h:outputLabel value="Name" />
</div>
```
###### Floating Action Button
```html
<span class="fab" elevation="1" elevation-active="2"  >
  <p:commandLink styleClass="material-ripple">
    <i class="material-icons">more_vert</i>
  </p:commandLink>
</span>
```

###### Card
```html
<div class="md-card" elevation="1" border="2">
  <div style="padding: 24px;">Card content</div>
</div>
```

###### Popup Menu
```html
<div class="md-menu-popup-container">

  <div class="md-menu-popup-trigger material-ripple circle-ripple" for="popup_menu" >
    <i class="material-icons">more_vert</i>
  </div>

  <menu id="popup_menu" class="md-menu-popup popup-bottom-right"
    elevation="2" corner="2">
    <p:commandLink value="Link 1" styleClass="material-ripple" />
    <p:commandLink value="Link 2" styleClass="material-ripple" />
    <p:commandLink value="Link 3" styleClass="material-ripple" />
  </menu>

</div>
```

https://material.io/icons/

https://getmdl.io/

https://github.com/balintsoos/material-ripple

https://www.dafont.com/pt/roboto.font
