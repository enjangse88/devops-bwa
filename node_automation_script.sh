#!/usr/bin/env bash
#maintainer : enjangse
#This script will install npm and node js lts version

#download nvm installer
echo "Downloading nvm installer"
curl -sL https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh -o install_nvm.sh

echo "  Installing NVM   "
chmod +x install_nvm.sh
sh install_nvm.sh

#load new bash profile
source  ~/.profile

echo "Finished installing"
echo "==================="
echo "Installing Node Version"
echo "Installing default LTS Version"

#check if NPM have installed or not and reload bash profile
check_nvm=$(nvm --version) | echo $?
if [[ $check_nvm == 127 ]]
 then 
	source ~/.profile
 fi

if [[ $check_nvm != 127 ]]
then 
    echo "NPM is not installed"
else
	nvm install --lts
fi

check_node=$(node --version) | echo $?
if [[ $check_node == 127 ]]
then 
	source ~/.profile
fi

nvm=$(nvm --version)
node=$(node --version)
echo "NVM version: $nvm" 
echo "Node version: $node"
