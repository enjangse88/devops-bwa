# Devops_BWA

###This repo contains exercises on various technical topics from BWA DevOps Course. 
 
## Prepare instance AWS EC2 instance 

```aws ec2 run-instances \
    --image-id ami-bwa-instance \
    --count 1 \
    --instance-type t2.micro \
    --key-name bwa-id-key \
    --security-group-ids sg-07570e17ab8331f13 \
    --subnet-id subnet-00b5ede5e160caa59 \
    --block-device-mappings "[{\"DeviceName\":\"/dev/sdf\",\"Ebs\":{\"VolumeSize\":30,\"DeleteOnTermination\":false}}]" \
    --tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=bwa-server}]' 'ResourceType=volume,Tags=[{Key=Name,Value=bwa-server-disk}]'
    ```
