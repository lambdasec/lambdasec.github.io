---
layout: post
title: Is the World Ready for the New Generation of Self-Propagating Ransomware?
---

Self-propagating threats such as WannaCry and Petya were only
the tips of the iceberg. The success hackers enjoyed with
WannaCry and Petya makes it quite likely others will try to
replicate the tactics used by deploying ransomware as a worm.
The propagation mechanisms employed by both ransomware families
enabled the threats to spread quickly across an entire computer
network. In this article, we will see how do they work and what are organizations doing to prepare themselves 
for the likelihood of the more pronounced threat.

![Ransomware](../images/ransomware.jpg)

Ransomware like WannaCry and Petya use classic worm-like techniques to spread laterally across the network. These can broadly be divided into three categories:

1) Stealing credentials or using existing active sessions, where the ransomware uses existing local accounts the user has on the machine to try and login to other machines on the network. This was used by the Petya ransomware to spread across local networks.

2) Using open file-shares to transfer malicious files across the network. In an enterprise infected machine there are typically several shared folders, the ransomware tries to copy the malicious binary on to those file shares and when an unsuspecting user executes the binary, they get infected on their own machine.

3) Using vulnerabilities on un-patched machines, in this case the ransomware uses either known vulnerabilities or zero day exploits to actively target un-patched machines on the network. By actively exploiting all vulnerable machines the ransomware can quickly spread across the entire organization. WannaCry ransomware used EternalBlue an exploit for the Windows SMB protocol to spread this way.

Protecting against such advanced and rapidly spreading ransomware requires companies to be proactive and prepare for such threads in advance. Some of the steps an enterprise can take are as follows:

- All critical data must be backed up periodically to ensure that the in event of an attack data loss can be prevented. There are several vendors in this space that provide data backup and recovery products to help with this
- All network connected machines should be patched and kept up to date with latest OS and application updates, this will make it difficult for the ransomware to spread laterally.
- Employees must be trained regularly to identify potential phishing campaigns that may be used to target them for initial infection.
- Access to file shares and machines should be provided on a need-only basis and reviewed periodically to ensure that stale credentials are retired.
