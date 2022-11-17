# Devops_BWA

###This repo contains exercises on various technical topics from BWA DevOps Course. 
 
### Prepare instance AWS EC2 instance 

```
aws ec2 run-instances \
    --image-id ami-bwa-instance \
    --count 1 \
    --instance-type t2.micro \
    --key-name bwa-id-key \
    --security-group-ids sg-07570e17ab8331f13 \
    --subnet-id subnet-00b5ede5e160caa59 \
    --block-device-mappings "[{\"DeviceName\":\"/dev/sdf\",\"Ebs\":{\"VolumeSize\":30,\"DeleteOnTermination\":false}}]" \
    --tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=bwa-server}]' 'ResourceType=volume,Tags=[{Key=Name,Value=bwa-server-disk}]'
  ```

### Prepare NodeJS, NPM, PM2

1. Install NVM 
```
curl -sL https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh -o install_nvm.sh | bash
```
2.Reload bash profile
```
source ~/.bash_profile
nvm --version
```
3. Install nodeJS and NPM
```
nvm install --lts  // install LTS version 
nvm install ${node-version} // install spesific version
```
4. Check version 
```
nvm --version
node --version
```
I created bash script and ansible version. 
```
node_automation_script.sh 
```
for ansible playbook, I wrote ansible playbook.
```
node_install.yaml
```
