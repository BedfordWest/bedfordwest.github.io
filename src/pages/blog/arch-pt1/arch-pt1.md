---
title: An Experiment with Arch and i3 Tiling Window Manager - Part 1
author: Bedford West
date: 2015-08-11
---

Hello again, everyone!

So, when I last left you, I was beginning my journey with attempting to install [Arch Linux](https://www.archlinux.org/)
and the [i3 Tiling Window Manager](https://i3wm.org/) for my personal laptop. As expected, things did not go smoothly,
initially. One thing I enjoy about trying something like Arch out, however, is that you really get your hands dirty
and have to work to achieve your goals.

The first time I attempted this installation a little over a year ago, things went smoothly until I needed to install
my video drivers and attempt to have [Xorg](https://wiki.archlinux.org/index.php/Xorg) display some basic output to
my screen. You see, the Dell Precision M4800 laptop I have actually comes with two video adapters (one integrated Intel
and one high-performance Nvidia) which utilize a technology called 
[Nvidia Optimus](https://en.wikipedia.org/wiki/Nvidia_Optimus). The thing is, Nvidia is notorious for having proprietary
driver conflicts with Linux, and this technology only adds to that conundrum.

It turns out this most recent install of Arch met with much the same fate. I was able to get a basic installation going
just fine by following the [Arch Beginner's Guide](https://wiki.archlinux.org/index.php/Beginners%27_guide). The problem
came immediately after finishing this guide, when I tried to follow the General recommendations section to begin doing
things like install a Windows Manager.

Here's the thing: based on the way the instructions were written, I assumed I just needed to install my video drivers,
then Xorg, then [Bumblebee](http://bumblebee-project.org/) (an open source implementation of Optimus) and I would be on
my way. The problem is that, upon doing this, I was receiving all sorts of fun errors when attempting to load Xorg
or run `optirun glxgears -info`. These errors were generally of the fashion "systemd-logind: failed to get session: 
PID XXX does not belong to any known session" or "could not detect any displays" or "could not detect any devices."
The problem with these errors is that they are actually fairly common, which means they arise from a number of possible
conditions. This led me to follow a number of support threads and sections of the Arch Wiki to no avail.

After tinkering around with things for two full nights and stumbling upon various threads, I finally solved my problem.
It turns out, I think, that my problem was as simple as not understanding the components of Xorg and what was actually
necessary for it to draw to the screen. For starters, when I installed the Xorg packages, I didn't realize that
`pacman -S xorg` would not install all of the necessary dependencies when I select "all" for the packages to install.
I actually had to manually install `xorg-server`, `xorg-utils`, `xorg-init`, `xorg-server-utils`, and `xorg-term`. In
addition, I didn't realize that I had to copy over an [.xinitrc](https://wiki.archlinux.org/index.php/Xinitrc) file
to my home directory and then include an `exec <display manager>` command in there somewhere. So, once I learned this
and downloaded i3, I was able to point xinitrc to i3 and start up i3 just fine with the `startx` command.

So, I'm off! It's been a challenge so far, but I've already learned a lot. In particular, I've learned quite a bit
about the newly integrated [systemd](http://www.freedesktop.org/wiki/Software/systemd/), how Xorg works, and also
a bit about editing Kernel configurations in the bootloader and working with basic networking.

I can't wait to see where this experiment takes me next!

Oh, btw - I know these are heavy on words and light on images at the moment. Once I get to a point where I can take
screenshots on the new box, I'll work on getting some images in these posts!
