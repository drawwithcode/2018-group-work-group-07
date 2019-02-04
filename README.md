# The idea

![alt text](https://github.com/drawwithcode/2018-group-work-group-07/blob/master/endangered.png)

### Who are we?
This is a project created by Teresa Cremonesi, Andrea Febres Medina, Filippo Ferrari and Cristina Pita da Veiga developed in the course of Creative Coding at Politecnico di Milano.

### What is this?
This project is an interactive where the user has to find in the Amazonic jungle five different animals endangered or threatened (Sloth, Butterfly, Armadillo, Frog and Monkey) using a variety of tools: the voice, the keyboard, the mouse... Thought the time they spend playing with it they will discover different characteristics of the animals and interact with the computer. We create also "fake animals" in the background that are not really in the jungle, and the user should discover which are they. Moreover, to active two tools you have to select them (banana and light) the other two, can be used without selectioning them. 

*Banana*: clicking over the banana the user active the tool and when is aproximiting to the monkey the forest start to move so they can select the plant and see the monkey.

*Light*: some animals are sensible to the light (in this case the sloth). Activing the light appears a cover to search the animal moving the mouse.

*Voice*: saying the name of the animals hidden the user will find two of them. In this way, will appear the armadillo and the butterfly.

*Keyboard*: pushing the space to move the plants and clicking over it to see the hidden animal to find the frog.


### Why this idea?
This idea starts as a claim about what is happening with the animals because of humans. In the last years has increased the number of species in danger or threatened because of human acts and it has been declared as a “global epidemic”. Scientists estimate that up to 200 species die every hour. The deforestation of the Amazon, hunting and other human actions are destroying diverse species. 

With this game the user discover some of the species that are in danger. This is a way to make people awareness about this problem. We have to create conciousness about our "global village".


## Inspirations/References

- Visual

The idea was to create illustrations but not very childish style. At the end the idea is to concern people about a very big problem, the game can be fun with colourfull illustrations, but there is a black screen in the back remember the problem. 

- Interactive projects inspiration

![alt text](https://github.com/drawwithcode/2018-group-work-group-07/blob/master/inspi2000.png)

Hidden folks is an inspiration for the project because of the idea of creating a big screen to find the animals.
https://hiddenfolks.com/

Species in pieces is a website where animals in danger are creating with different pieces geometricaly, in this way to can discover more about endangered animals.
http://www.species-in-pieces.com/

This project develoop by propublica give us an idea of what we wanted to talk about: animals in danger of extintion. From this information we achive the idea of the project.
https://projects.propublica.org/extinctions/

- Theorethical

We search in different platforms the animals endangered or threatened and we selected the most interesting for our projects. These are some of the sources: Proceedings of the National Academy of Sciences, World Wild Life, NYT, BBC and IUCN Red List of Threatened Animals (https://www.iucnredlist.org/). Also we search for articles about the topic that could make our story more deeper. For example: the economics of finding the endangered species (http://www.rff.org/blog/2010/economics-endangered-species).


## Visual recap of the project
The banana tool

![alt text]( https://github.com/drawwithcode/2018-group-work-group-07/blob/master/banana.gif)

The light tool

![alt text]( https://github.com/drawwithcode/2018-group-work-group-07/blob/master/light.gif)

The space tool

![alt text](https://github.com/drawwithcode/2018-group-work-group-07/blob/master/space.gif)


# The project

## Design challenges

The project consist in different pages connected with buttons that arrive to the big screen of the rainforest. Also when the user finish, appear a screen with all the animals and the information. 

- Big screen

The main design problem we had was the Big Screen. At the begginig we started with the idea of creating a big screen to move around. The main problem was that if we created it, we had to cut other parts, so we decided to create a screen with all the elements, as Hidden Folks.

- Illustrations

We decided to do the sketch by our own illustrations. A big challenge was the the wide amount of png and levels we had in the sketch. Organize them and configurate in different levels was important.

- Tools

The interaction of the tools was the most important challenge. Create the interaction with the images and the illustrations require different solutions. 

![alt text](https://github.com/drawwithcode/2018-group-work-group-07/blob/master/sfondo.png) 


## Code challenges 


- Light

The light was one of the main lights we wanted to create with the camera, but we found problems to create the reaction with the whole scrren (at the begginig the moving screen gave us a better interaction with light), so we decided to create a different way to use it. With a cover we develop a "light" to wake up the sloth.

- Zoom and size screen

We found the problem that when you zoom with the keyboard or reduze the size of the windows the background can change, so we create a "error" screen to avoid the change of the size.


## Credits (third libraries used)

- Coding sources

We used p5js to create the code. This are the main sources:

Coding train: https://www.youtube.com/watch?v=Rk-_syQluvc
              https://www.youtube.com/watch?v=q_bXBcmfTJM
P5.js: https://editor.p5js.org/piecesofuk/sketches/SyBpNOJTb
              https://p5js.org/learn/interactivity.html
Processing: https://processing.org/examples/

Github: https://github.com/processing/p5.js/wiki/Positioning-your-canvas

Banana: https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjF09bP96HgAhVJ26QKHRk_DM8QjRx6BAgBEAU&url=http%3A%2F%2Fwww.freestockphotos.biz%2Fstockphoto%2F15912&psig=AOvVaw2cnhZ2xFLxXtII08a70JnX&ust=1549364751305777

- Information sources

Apart of the studies and articles, we based our information about the animals in different sources:

Proceedings of the National Academy of Sciences, World Wild Life, NYT, BBC and IUCN Red List of Threatened Animals (https://www.iucnredlist.org/), Resources For the Future (http://www.rff.org/blog/2010/economics-endangered-species).

### Information about the Amazon and the animals
The Amazon is the world's biggest rainforest and is the home of the 10% of species in the planet. Nearly two-thirds of the Amazon rainforest is found in Brazil, but it also cover other countries as Colombia, Peru or Bolivia. The Amazon River is, by far, the world's largest river by volume: 7.000 kilometers.But this incredible rainforest has a very big problem: human action. Unless the deforestation in the Amazon rainforest has been declining since 2004, is the biggest front in the world and, as explains WWF, interventions are needed to prevent a large-scale ecological disaster, as WWF explains. Right now, a 20% of the Amazon biome has already been lost.

*Blue morpho butterfly  (Morpho menelaus)*
 
This butterfly is one of the most known, emblematic and favorite of all Amazon species. They have a characteristic vivid blue color and shiny wings that reflect the light, making them easy to spot amidst the jungle canopy. The blue morpho is one of the largest butterflies in the world, measuring around six inches long and with wing spans of up to 20 centimetres. But there is a problem: they only life 115 days.

*Sloth of three fingers (Bradypus variegatus)*

The famous animal that always is sleeping is from the Amazon. The sloth of three fingers has short, stubby tails which they use when defecating, and three elongated fingers at the end of each limb. They have also the ability to turn their head through 270° which allows them to save energy while they are scanning for predators. In this way they don’t have to move their whole body. But, (surprise!) they are good swimmers, they have the ability to swim through water three times faster than they can move on the ground.
 
*Black spider monkey (Ateles paniscus)*
 
This cute monkey feeds on a wide variety of fruits and young leaves, flowers, buds, bark, honey, and occasionally small insects. They are agile primates, capable of moving swiftly through the trees by swinging, climbing, running along branches, or even walking bipedally. Other curious thing is that they can even hang suspended by the tail, leaving both hands free for feeding (they know how to distribute the work). This animal is very social, they live in groups of up to 20 to 30 individuals, divide into smaller or temporary subgroups. The only persistent relationship is between the female and offspring.

*Giant armadillo (Priodontes maximus)*
 
This curious animal is the largest of one of Earth’s most fascinating groups of armoured animals. The giant armadillo measures up to one meter long, exclusive of tail, with the tail adding another 50 centimetres, be careful, if you trip over him you can hurt yourself. It possesses more teeth than any other mammal (up to 100). Also, they are solitary individuals who feed mainly on termites. They are also good diggers and live in burrows in forests or scrub, emerging at night to feed. Yes, that’s not only vampires staff. 
 
*Lemur tree frogs (Agalychnis lemur)*

Surely you have seen this animal before, the lemur tree is bright yellowish-green to brown. They can change color depending on whether they are active or resting. For example, when they are active at night, they become more camouflaged as their upper parts turn to brown, also their eyes turn dark gray too. This is going to surprise you: they rarely jump unless fleeing from danger, they move slowly and walk hand over hand. And, this is gorgeous, these amphibians are part of the ‘tree frogs’ families, which have a fossil record in the Palaeocene (65 to 53 million years ago!).


![alt text](https://github.com/drawwithcode/2018-group-work-group-07/blob/master/animali2000.png)

