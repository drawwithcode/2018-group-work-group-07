# The idea

![alt text](https://github.com/drawwithcode/2018-group-work-group-07/blob/master/endangered.png)

### Who are we?
This is a project created by Teresa Cremonesi, Andrea Febres Medina, Filippo Ferrari and Cristina Pita da Veiga developed in the course of Creative Coding at Politecnico di Milano.

### What is this?
This project is an interactive game where the user has to find in the Amazon Rainforest five different animals endangered or threatened (Sloth, Butterfly, Armadillo, Frog and Monkey) using a variety of tools: the voice, the keyboard, the mouse... Trhought the time they spend playing with it they will discover different characteristics of the animals and interact with the computer. We create also "fake animals" in the background that are not really in the jungle, and the user should discover which are they. Moreover, to active two tools you have to select them (banana and light) while the other two, can be used without selectioning them. 

### Why this idea?
This idea starts as a claim about what is happening with the animals because of humans. In the last years has increased the number of species in danger or threatened because of human acts and it has been declared as a “global epidemic”. Scientists estimate that up to 200 species die every hour. The deforestation of the Amazon, hunting and other human actions are destroying diverse species. 

With this game the user discover some of the species that are in danger. This is a way to make people aware about this problem. We have to create conciousness about our "global village".

## Inspirations/References

- Interactive projects inspiration

![alt text](https://github.com/drawwithcode/2018-group-work-group-07/blob/master/inspi2000.png)

Hidden folks is an inspiration for the project because of the idea of creating a big screen to find the animals.
https://hiddenfolks.com/

Species in pieces is a website where animals in danger are creating with different pieces geometricaly, in this way to can discover more about endangered animals.
http://www.species-in-pieces.com/

This project develoop by propublica give us an idea of what we wanted to talk about: animals in danger of extintion. From this information we achive the idea of the project.
https://projects.propublica.org/extinctions/

- Theorethical

We select the Amazon because is the biggest deforestation front in the world, as WWF explain, and is the home of the 10% of species in the planet. In this image provided by the ESA (European Space Agency) we can see how has increased the deforestation in the Amazon, one of the main reasons of the dissapearence of animals. 

![alt text](https://github.com/drawwithcode/2018-group-work-group-07/blob/master/amazon.jpg)

The Amazon is the world's biggest rainforest and is the home of the 10% of species in the planet. Nearly two-thirds of the Amazon rainforest is found in Brazil, but it also cover other countries as Colombia, Peru or Bolivia. The Amazon River is, by far, the world's largest river by volume: 7.000 kilometers.But this incredible rainforest has a very big problem: human action. Unless the deforestation in the Amazon rainforest has been declining since 2004, is the biggest front in the world and, as explains WWF, interventions are needed to prevent a large-scale ecological disaster, as WWF explains. Right now, a 20% of the Amazon biome has already been lost.

##### *Blue morpho butterfly  (Morpho menelaus)*

This butterfly is one of the most known, emblematic and favorite of all Amazon species. We selected it because is a butterfly protected in the Amazon and there are some asociations to preserve them because of their natural interest.

##### *Sloth of three fingers (Bradypus variegatus)*

The Sloth is a very known animal because of their ralentization and movies. But what we don't know is that there are different species of it, and one of them is in very danger. There are also another facts that we don't know, for example is a very good swimmer, something that they can learn playing this game. 

##### *Black spider monkey (Ateles paniscus)*

Is not the most common of the monkeys but a important one. As the sloth there are a lot of varients of them, sometimes can be confused by others, but is very protected. 

##### *Giant armadillo (Priodontes maximus)*

The giant armadillo is a huge animals (one meter long, exclusive of tail, with the tail adding another 50 centimetres). Many populations are threatened by agriculture.

##### *Lemur tree frog (Agalychnis lemur)*

This frog is very known, but also in danger. The colors atract a lot of people and the changes in the environment are making them dissapear. Something that we should think about taking in count that is specie has a fossil record in the Palaeocene (65 to 53 million years ago).

- Visual

The idea was to create illustrations but not in a very childish style. At the end the idea is to concern people about a very big problem, the game can be fun with colourfull illustrations, but there is a black screen in the back remember the problem. 

![alt text](https://github.com/drawwithcode/2018-group-work-group-07/blob/master/inspira.png)

![alt text](https://github.com/drawwithcode/2018-group-work-group-07/blob/master/sfondo.png) 

# The project

## Interactions

- Voice

With the speech recognition has been created two interactions.

*Voice tool*: saying the name of the animals hidden the user will find two of them. In this way, will appear the armadillo and the butterfly.

- Sound

The sound create the move of the different pngs in the background and the atmosphere.

- Keyboard

*Keyboard tool*: Pushing the space to move the plants and clicking over it to see the hidden animal to find the frog.

![alt text](https://github.com/drawwithcode/2018-group-work-group-07/blob/master/keybgif.gif)

- Mouse

With the mouse the user can move around the screen and select the animals. Also the light and the banana tools work with that.

![alt text](https://github.com/drawwithcode/2018-group-work-group-07/blob/master/light%20ok.gif)

*Light tool*: some animals are sensible to the light (in this case the sloth). Activing the light appears a cover to search the animal moving the mouse.

![alt text](https://github.com/drawwithcode/2018-group-work-group-07/blob/master/bananagif.gif)

*Banana tool*: clicking over the banana the user active the tool and when is aproximiting to the monkey the forest start to move so they can select the plant and see the monkey.

## Code and design challenges 

The project consist in different pages connected with buttons that arrive to the big screen of the rainforest. Also when the user finish, appear a screen with all the animals and the information. 

- Big screen

The main design problem we had was the Big Screen. At the begginig we started with the idea of creating a big screen to move around. The main problem was that if we created it, we had to cut other parts, so we decided to create a screen with all the elements, as Hidden Folks.

- Illustrations

We decided to do the sketch by our own illustrations. A big challenge was the the wide amount of png and levels we had in the sketch. Organize them and configurate in different levels was important.

- Light

The light was one of the main interactions we wanted to create with the camera, but we found problems to create the reaction with the whole screen (at the begginig the moving screen gave us a better interaction with light), so we decided to create a different way to use it. With a cover we develop a "light" to wake up the sloth.

```
  var dlight = dist(mouseX, mouseY, windowWidth / 3, windowHeight / 9);
  if (dlight < 20) {
    light = true;
  }

  var dsloth = dist(mouseX, mouseY, windowWidth / 1.7, windowHeight / 3);
  if (dsloth < 50) {
    leavessloth = false;
    light = false;
  }
  
```

- Zoom and resize screen

We found the problem that when you zoom with the keyboard or reduze the size of the windows the background can change, so we create a "error" screen to avoid the change of the size.

```

  if (windowWidth < 1100 || windowHeight < 620) {
    push();
    rectMode(CENTER);
    rect(windowWidth / 2, windowHeight / 2, windowWidth, windowHeight);
    textAlign(CENTER);
    textSize(100);
    text('Error', windowWidth / 2, 300);
    fill(255, 0, 0);
    pop();
  }
  
  ```

- Buttons

To link all the screens we created different buttons with "if", in this sense, was a huge challenge to connect all of them. But at the en, we managed to do it.




## Credits (third libraries used)

- Coding sources

We used p5js, p5.dom and p5.sound. This are the main sources:

Coding train: https://www.youtube.com/watch?v=Rk-_syQluvc
              https://www.youtube.com/watch?v=q_bXBcmfTJM
              
P5.js: https://editor.p5js.org/piecesofuk/sketches/SyBpNOJTb
              https://p5js.org/learn/interactivity.html

P5.speech.js: http://ability.nyu.edu/p5.js-speech/
              
Processing: https://processing.org/examples/

Github: https://github.com/processing/p5.js/wiki/Positioning-your-canvas

Banana: https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjF09bP96HgAhVJ26QKHRk_DM8QjRx6BAgBEAU&url=http%3A%2F%2Fwww.freestockphotos.biz%2Fstockphoto%2F15912&psig=AOvVaw2cnhZ2xFLxXtII08a70JnX&ust=1549364751305777


- Information sources

We search in different platforms the animals endangered or threatened and we selected the most interesting for our projects. These are some of the sources: 

Proceedings of the National Academy of Sciences, World Wild Life, NYT, BBC and IUCN Red List of Threatened Animals (https://www.iucnredlist.org/). Also we search for articles about the topic that could make our story more deeper. 

The economics of finding the endangered species (http://www.rff.org/blog/2010/economics-endangered-species). 

Also there are some other articles related with information of the animals as The Guardian (https://www.theguardian.com/environment/2012/jul/12/amazon-endangered-species-doomed-brazil).

More information about animals:

https://www.rainforest-alliance.org/species/blue-butterfly

https://nationalzoo.si.edu/animals/lemur-tree-frog

https://slothconservation.com/about-the-sloth/three-fingered-sloths/

http://www.ourendangeredworld.com/species/land-mammals/giant-armadillo/

https://www.worldwildlife.org/species/black-spider-monkey

![alt text](https://github.com/drawwithcode/2018-group-work-group-07/blob/master/animali2000.png)

