---
title: Firefly RPG Roll 20 Engine
author: Casey Link
website: https://ramblurr.github.io/roll20-character-sheets/
footer: Casey Link
tags: [Firefly, RPG, Roll 20, script]
---

<div class="panel panel-warning">
<div class="panel-heading">Work in Progress</div>
<div class="panel-body">
This document is a work in progress. Please report any bugs, typos,
missing content, or unclear passages to Casey.
</div>
</div>

---

**Update Note**: This repository contains just the Firefly / Cortex+ dice pool
scripts, and not the graphics as I don’t yet have permission to distribute
them.

---

## Introduction

**Welcome!** You have in your virtual hands here a digital pack of graphics and
scripts for improving the Firefly RPG experience on Roll 20.

To get started, you’ll find setup and usage instructions below.

### Recent Changes

**v1.0beta** 17 June 2014

* First version w/ dice pool engine

### Requirements

* *(GM-only)* Roll 20 Mentor account
* *(GM and Players)* Modern Web browser: latest Chrome, latest Firefox, or Internet Explorer 10

### Features

* Interactive character sheet
* Point 'n click dice pool building and rolling
* Complication and Assets management

## Building the Script

The latest version of the built script is [dist/cortex-engine.js](dist/cortex-engine.js)

But you can build it with:

```bash
make js    # make the javascript 
make docs  # make the documentation
```

Building this project requires:

1. yui-compressor
2. pandoc

## Initial Setup

Setting your Roll 20 campaign with the Firefly RPG Engine is a X step process. It
will take about an hour and requires basic understanding of Roll 20’s user
interface.

### Step 0: Subscribe & Create the campaign

You must have a Mentor level account to use the script. If you don’t it simply
won’t work. Next, create a fresh campaign in Roll 20.

### Step 1: Upload Graphics

Included in the Firefly RPG Roll 20 Engine is a collection of original graphical
assets designed to mimic the feel of tabletop playing and the aesthetic of the
Firefly core rulebook.

The pack includes:

* d4 - d12 dice images (like the kind used in the Firefly corebook)
* Plot point tokens
* Post-it notes
* Index cards
* Tabletop background images

The *minimum* required assets for the Firefly script are the dice and plot point images.

#### Minimum Graphics Upload

* Upload the 70px yellow and green dice images (in `Firefly Graphics Pack/Dice/70px`)
    * I suggest tagging them with `firefly` and `dX` (where x = 2, 6, 8, 10, or 12).
* Upload the 100px Plot point token  (in `Firefly Graphics Pack/Plot Points`)


#### Recommended Graphics Upload

Upload the 70px dice images, 100px plot point tokens, notes, index cards, and
background images.

#### After Uploading

After uploading the images you must find the URLs for the dice images (d4-d12).
To do this open your art library, find the dice images, right click on the
image and select *Copy image URL* or *Copy image location*.

Paste the image url somewhere safe, you will need it in a later step.

Do this for each dice image.

### Step 2: Create Dice Decks

Required reading: [Roll 20 Deck Documentation](https://wiki.roll20.net/Card_Decks_and_Rollable_Tables) for de

During a game of Firefly RPG, the GM and players will need tokens to represent
Big Damn Hero Dice and Plot Points. We use the Roll 20 ‘Decks’ feature to hold
and organize these tokens.

Each deck contains an unlimited number of one card. Players can draw these into
their ‘hand’, or the GM can hand them out by dragging and dropping. Everyone
can see the number of BDH dice and Plot Points each player has.

Create a deck containing 1 card for each of the following tokens:

* Plot point
* d4 - d12

Here is an example for plot points:

![PP sample](docs/decks-pp-sample.png)\

Each deck should use the following options:

* **Name:** *Plot points, d4, d6, etc*
* (x) **Show deck to players**
* (x) **Players can draw cards?**
* (x) **Cards in deck are infinite?**
* **Discard Pile**: No discard pile
* **Cards played to tabletop are played**: Face Up
* **Card size on table top**: 70 px x 70 px
* **Players See**: (x) Number of Cards, (x) Front of Cards
* **GM Sees**: (x) Number of Cards, (x) Front of Cards

Add one card with the appropriate image. And set the backing to the same image. When you’re finished you should have a list like this:

![Finished deck example](docs/decks-full.png)\

When you have all the decks shown, the side of your Roll 20 table will look
like the image below. You can use the mouse to drag and drop the dice off from
the decks, as well as deal and recall (take back) ‘cards’ from players.

![Dice decks on the table](docs/decks-table.png)\


### Step 3: Set Character Sheet

From your campaign’s main page, click **Campaign Settings**.

Then, under the **Character Sheet Template**
section, choose the Firefly option.

### Step 4: Upload Firefly Script

From your campaign’s main page, click **API Scripts**.

Add a new script named “*Firefly*” and copy/paste the contents of the
`cortex-engine.js` file included in the engine zip file.

At the top of the pasted file you will find a section called *Cortex Plus
Constants*, and you will see some code that says:

`/* Edit these URLs to point to your dice assets */`

below which you will see some lines such as:
```javascript
    tokenD4: "https://s3.amazonaws.com/files.d20.io/images/3908534/h8snbjLuxlVqawSzCsKs5A/thumb.png?1398993124",
    tokenD6: "https://s3.amazonaws.com/files.d20.io/images/3907733/MDN2yejuiQS52A-8NECVkg/thumb.png?1398988459",
    tokenD8: "https://s3.amazonaws.com/files.d20.io/images/3908533/K3qv6LrN-3Cs3kU1zFIHOg/thumb.png?1398993124",
    tokenD10: "https://s3.amazonaws.com/files.d20.io/images/3908531/ptUfuaVxrtPno1K8RG3X-A/thumb.png?1398993123",
    tokenD12: "https://s3.amazonaws.com/files.d20.io/images/3908532/SCvdCztxZaHmQxLzLotgag/thumb.png?1398993123",
```

Replace the urls in this section with the URLs you saved in step 1.

**At this point:** Launch your campaign, or if you already have it open, close it and relaunch it.

### Step 6: Setup Script

Setting up the script is a two parts.

#### 6a: Create your GM-LIST handout

The GM-LIST handout is a handout we use to identify GM players. Any player that
has access to the GM-LIST handout has access to special GM commands.

Create a handout in your campaign called ‘GM-LIST’, and add yourself, and any
co-GMs, to the “Can be Edited by” list.

#### 6b: Perform script setup

In the chat window type: `!cortex setup`

This will perform initialization routines and create the macros needed to
manipulate dice pools.

**At this point** if everything has gone according to plan you should see the
following macros in your list.

![macros list](docs/macros-list.png)\

You **and all your players** should check the “In Bar” option so they appear
under the player names on the table.

### Step 7: You’re Done!

Setup is now complete. I suggest playing with the dice pool buttons to get an
idea of how to use the system so you can explain it to your players.

## Usage Instructions

### Firefly Character Sheet

Using the Firefly character sheet is fairly straightforward. Each player, or
the GM, can fill in the necessary values.

Editing attributes, skills, distinctions, etc is straightforward, simply fill
out the text fields and hover the mouse over the dice image to change its value.

All attributes, skills, specialities, distinctions, and signature assets have roll buttons to add the
corresponding value to the dice pool.

In the case of attributes and skills, click *the name of the attribute or skill
itself* to add the dice to the pool.

For specialities, distinctions, and signature assets, click the little dice
icon to add the appropriate dice value to the pool.

### Dice Macros

Ever player has his own dice pool. He/she can perform the following actions on it:

* *Add dice* - put a single dice into the pool
    * Manually with the `Pool:Add` Macro
    * By clicking a button on the character sheet
    * By selecting a Asset or Complication dice token and clicking `Add-to-Pool`
* *Roll Pool* - roll the entire pool and keep the two highest values
* *Show Pool* - print out the contents of the pool to the chat
* *Clear Pool* - remove all dice from the pool
* *Undo* - Either removes the last dice added to the pool, or reverses a clear pool action

The GM has access to additional macros. These don’t show any response to the
players, so the GM can manipulate his pool in private.

* *GM-Pool:Add* - add a dice to the pool silently
* *GM-Pool:Show* - show the contents of the pool to the GM

### Managing Complications & Assets

Complications and Assets can be added with the `Complication:Add` and
`Asset:Add` macros, or directly with the chat commands (see examples below).

**Chat Command Examples:**

```
!token add complication 8 Gut Wound
!token add asset 6 Medical Gauze
```

When adding an asset or complication, the script will place a dice token and a
text label next to each other.

Here is an example using the post-its included in the graphics pack.

![Asset example](docs/tokens-assets.png)\


#### Placing Complications & Assets

**How does the script know where to put a complication or asset?**

Good question, I’m glad you asked.

When the player *Bob123* tries to add a complication or asset, the script will
look for a token with the following properties:

* On the current table
* Name: *assets* or *complications*
* Controlled By: *Bob123*

If the script cannot find such a token, it will print out an error.

Personally, I recommend using one of the post-it graphics or notecards in the
graphics pack. This token can be on the Map layer!

This is how it should look in your token edit window:

![Asset example](docs/tokens-assets-card.png)\


#### Roll 20 Limitations

Currently this is the weakest part of the Firefly RPG Roll20 Engine. Roll20
itself has several outstanding bugs that makes seamless and headache free
Asset+Complication management all but impossible.

Until these bugs are improved, we will have to live with rudimentary support.
*It is better than nothing however!*

The current limitations are:

* Limited placement support
* Dice icon and text label don’t move as a group

## Recommended Roll 20 Settings

#### In Game Settings

If not using video in Roll 20, it is recommended to set the **Video/Player
Avatar Size** option to “Names Only” under the *Video+Voice* section in the
settings tab.

(x) **Show Macro quick bar?**

[projhome]: https://ramblurr.github.io/roll20-character-sheets/
