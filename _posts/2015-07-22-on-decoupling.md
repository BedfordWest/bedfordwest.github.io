---
layout: post
title: "On Decoupling"
date: 2015-07-22
---

After working in the software industry for a while, I've realized the importance of decoupling when designing code.
What is decoupling in the context of development? Essentially, it's *the practice of removing interactivity between
pieces of code which can or should operate independently*. In object oriented programming, for example, this might
mean separating out blocks of functionality within a large class into several smaller classes, each operating
independently from one another.

I won't rehash the numerous things that have been said about why this is important, but the short summary is the
following:

 * Decoupled code is less likely to break when something unrelated is modified
 * It is often easier to read and understand decoupled code
 * Decoupling code can facilitate Test-Driven Development and unit testing
 * It is usually easier to maintain and troubleshoot decoupled code

A few months ago, I spent some time learning a Java-based game development framework called 
[libGDX](http://libgdx.badlogicgames.com/). After working on a hobby game project for a few weeks, I became
distracted and set aside the effort for a few months. Tonight, I picked the project back up and looked at it with
a fresh set of eyes. What did I find? There is ample opportunity for some decoupling of the code I have already
written.

The first thing I wanted to do was ask myself the following question: "If I were to want to publish independent
systems of this game as reusable tool sets to a public repository, would I be able to?" In order to answer that
question, I first needed to establish which systems I would want to do that with, in the first place. After some
thought, I decided the only system I can initially think of which fits this criteria is the random map generation
tool I developed to help procedurally generate my stages for the game.

It works like [this](http://gamedevelopment.tutsplus.com/tutorials/generate-random-cave-levels-using-cellular-automata--gamedev-9664):
1. Provide the map generator with some set of parameters to determine size, spaciousness, and general shape.
2. Iterate through an algorithm a number of times to refine the map to the desired shape.
3. Clean up the produced map to ensure it fits the parameters necessary for the game.

The idea is simple enough, and it's something I could see being useful for other projects in the future. So, I should
find a way to decouple it such that I can publish it to an independent repository and enable it to interact via some
sort of universal input/output mechanism, right? Let's see how it looks. 

Right, so starting at the top...

    package com.gletho.levels;

    /**
    * Created by Bedford on 3/28/2015.
    */

    import com.badlogic.gdx.Gdx;
    import com.gletho.util.Constants;

    import java.util.ArrayList;
    import java.util.List;
    import java.util.Random;

    public class MapGenerator
    {
    
Oh boy. So, this isn't a great start. What's the problem? Well, first of all, the very package name this class belongs to indicates a problem. *com.gletho.levels* is a clear indication that this class is meant to exist within a package directly tied to the level generation of my game, Gletho. If this tool is supposed to exist indepdently of the game, that's clearly not going to work.

Next, we see that this class imports functionality from both the game and the Gdx libraries. This is clearly a problem, since neither would work if this were published as an independent toolset.

Great. Now that we've identified those problems, let's move on.

    int birthLimit = 4;
    int deathLimit = 3;
    int numberOfSteps = 6;
    
Alright, here's another problem. These are parameters used to indicate the shape of the map, and they are baked directly into the class. Ideally, this tool would allow the user to specify these parameters at runtime or upon instantiation. These should be initialized via parameters in a constructor! Ok, what's next?

    // The only way for another class to get
    //   a map should be through this method
    public List<LevelTile> getMap(long seed) {
        generateMap(seed);
        return levelTiles;
    }
    
Here is the method whereby I intended for the game to obtain generated maps. That's good, in principle, but why is the output a List of LevelTile objects? LevelTile is a class defined within my game. If this is going to be externalized, I need to find a more generic output format and design a utility class within my game to convert it to something usable. This utility class could even be decoupled to be reusable for any libGDX project, if so desired.

I could continue, but I think this gets the point across, and I need to actually start working on resolving these issues! So, let this be a lesson (both to the reader and to my future self): always think about reusability and decoupling when designing your code! It may save quite a bit of time in future endeavors.
