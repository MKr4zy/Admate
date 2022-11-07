Official Repo

# Intro
This Modpack was created, because my friends and I needed something to play and the current modpacks didn't suit our needs. 
We're two non technical players which like to explore and build stuff and two advanced technical players who like to play Gregtech from time to time but won't spent their lives in it-.
So based on our Interests or other suggestions this modpack will change over time.

### *Ad*venture
Right now this Modpack features lots of new Dimension, Biomes, Structures and Planets to explore.

### *Ma*gic
For the magic side of things there's Mahou Tsukai, Ars Nouveau, Botania and alot more!

### *Te*ch
There are also a bunch of Tech mods such as Applied Energistics, Refined Storage, Mekanism, Computer Craft or Xnet. 


### Some goodies
We changed or removed some recipes because they're way too easy or just overpowered to our meanings.

The questbook is designed to guide you but we don't like to force players to quest at all. All rewards are nice to have but in no way pregression-gates.

Honarable to mention mods: Minecolonies, The Abyss, Journeymap, Create, Quark and Ambient Sounds.



### Planned for the future
- [ ] More advanced questline [Branch](https://github.com/MKr4zy/Admate/tree/questline)
- [ ] Check if there're any stale depency mods
- [ ] Remove Mod "itlt-1.18.x-2.1.5" => stale because of KubeJS
- [ ] Some recipe tweaks

---

# Setup


### Dev Environment
- Go into git bash and tell it to follow symlinks `git config --global core.symlinks true`
- Clone the repository to your favorite location (e.g. C:\Users\%username%\Documents\GitHub\Admate)
- Remove the overrides folder
- Create an mklink junction `mklink /j overrides "C:\Users\%username%\curseforge\minecraft\Instances\Admate-DEV\"`
- Sync the repository to make sure it works
From now on all changes don't need to be copied and synced but just synced.


### Client Installation 
Download the newest stable build from CurseForge (link down below)


#### Startup time

CPU: `i7-6700k @4.00GHz`

RAM / Flags:
```
-Xms8G -Xmx8G -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1
```

- Launching MC: ~5minutes
- Creating a World: ~4minutes


### Server Installation


#### Docker
see [Docker-Compose File](docker-compose.yml)


#### Bare metal
Requires Java 17!

Download Serverpack from CurseForge

---

# Links
Curseforge: https://www.curseforge.com/minecraft/modpacks/admate

Bugtracker: https://github.com/MKr4zy/Admate/issues
