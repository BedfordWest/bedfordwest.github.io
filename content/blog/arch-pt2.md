+++
title = "An Experiment with Arch and i3 Tiling Window Manager - Part 2"
date = 2015-05-19
[taxonomies]
categories=["blog"]
tags=["linux", "operating systems", "development environments", "tooling"]
+++

The joy of learning continues as I move forward with my attempt at setting up a functional Arch + i3 work environment on my laptop.

Progress:
- Arch installed
- i3 installed
- i3 boots up and displays separate workspaces on each display when connected to an external monitor
- Wi-Fi working with NetworkManager

Known Problems:
- No sound
- Ugly interface
- No backup/snapshot system installed

Alright, so what has happened since my last post? Well, despite my joy at having gotten i3 and Xorg to work correctly on my installation, I soon realized that I was not in the clear. When I went to boot up my laptop for the first time after my last post, I realized my external monitor was no longer displaying anything. In fact, it turns out the system wasn’t registering the monitor as connected at all. I spent a while trying to adjust Xorg or i3 settings, but nothing seemed to work. I also tried various video driver tweaks, which also did nothing to resolve the issue.

After a while, I discovered Arch has a wiki page for my particular laptop model. This is one reason why Open Source (and Arch Linux, in particular) are so amazing - the community support can often be fantastic. Once I found that page, I saw the notes at the bottom concerning things that don’t work or need adjustment for my model. This led me to me to discover Linux Dynamic Kernel Module Support. It turns out that the proprietary Nvidia drivers my laptop model needs are not compatible with the default Linux DKMS. I tried to work around this, but it is actually the workaround (adding nomodeset to my boot parameters) that caused my external monitor to no longer be recognized in the first place.

It turns out a user has made and maintained a version of the DKMS that works with Nvidia in the Arch User Repository. This isn’t ideal, as it adds a level of risk from both a security standpoint and also from the standpoint of system stability. Given the popularity of the package, frequency of update, and necessity on my end, however, I deemed these risks to be worth taking.

After installing the `nvidia-dkms` package from the AUR, my external monitor started working again! Unfortunately, this was not the end of my monitor troubles. While the monitor was being detected and was displaying output, it was always an exact mirror of my laptop primary display. This is not the intended behavior per the i3 documentation, so I realized something was wrong. The solution to this problem required an increase to my knowledge of xrandr.

While I did not discover the root cause of my problem with the mirrored displays, I did find an acceptable solution. The xrandr utility is packaged with Xorg to help identify and configure displays. It turns out executing a particular xrandr command would set the output of my external monitor to my desired configuration. This command was simply `xrandr --output eDP1 --auto --left-of VGA1`, where `eDP1` is my laptop primary display and `VGA1` is my external monitor. In order for this setting to work with i3, however, I needed to add the command as an executable statement in my `~/.i3/config` file. The syntax for this was simply `exec --no-startup-id xrandr --output eDP1 --auto --left-of VGA1`. Once I did this, my external display now displayed output independently from my laptop primary display and defaulted to a separate workspace, as expected!

Despite hearing so many terrible things about setting up Wi-Fi on Linux and, despite having a wireless adaptor known to have conflicts with Linux, I actually had a fairly easy time getting my Wi-Fi to work. I simply needed to identify the correct driver & firmware I needed to install (as the adapter was not working correctly out of the box), install that from the AUR, and then install and start NetworkManager and the NetworkManager Applet. The only remaining step was to add the applet to my i3 config file as an executable command. I also needed to install the Gnome Keychain in order to authenticate with my wireless network. After doing this, the NetworkManager starts correctly when I load i3 and automatically connects to my network. Easy!

The last thing I did was add startx to my `~/.bash_profile` so that i3 starts up as soon as I log in.

So, I think I’m getting there! This has definitely been extremely rewarding, and I think the toughest parts of my installation are probably behind me. I still need to address the “known problems” from above, but I’m hoping those will be relatively painless. After that, I’m free to play around with customizing my UI and workspace!

- [Intro](arch-intro)
- [Part 1 - Adventures with Xorg!](arch-pt1)
- [Part 3 - Looking Good](arch-pt3)
