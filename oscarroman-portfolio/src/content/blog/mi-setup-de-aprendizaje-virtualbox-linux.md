---
title: 'Mi setup de aprendizaje: VirtualBox + Linux'
description: 'Cómo monté mi laboratorio personal para aprender administración de sistemas Linux sin romper mi computadora'
pubDate: 'Jan 20 2025'
heroImage: '../../assets/blog-placeholder-1.jpg'
---

Cuando empecé a estudiar Ingeniería de Sistemas, uno de mis mayores retos era: **¿Cómo practico administración de sistemas Linux sin tener una computadora dedicada?**

La respuesta: **VirtualBox + máquinas virtuales**.

## ¿Por qué VirtualBox?

Hay varias opciones de virtualización (VMware, Hyper-V, KVM), pero elegí VirtualBox porque:

- ✅ **Gratuito y open source**
- ✅ **Funciona en Windows, Mac y Linux**
- ✅ **Fácil de usar** para principiantes
- ✅ **Buena documentación** en español
- ✅ **Snapshots**: puedo "deshacer" si rompo algo

## Mi setup actual

### Hardware
- **Laptop**: Lenovo con Intel Core i5, 16GB RAM, 512GB SSD
- **SO host**: Windows 11 (también funciona con Ubuntu)

### Máquinas virtuales que mantengo activas
1. **Ubuntu Server 24.04** - Para practicar administración de sistemas
2. **Ubuntu Desktop 22.04** - Para desarrollo web
3. **Debian 12** - Para aprender diferencias entre distros
4. **CentOS Stream** - Para practicar con RHEL-like systems

## Instalación básica (Ubuntu Server)

### 1. Descargar VirtualBox
```bash
# En Ubuntu (host Linux):
sudo apt update
sudo apt install virtualbox

# En Windows: descargar desde virtualbox.org
```

### 2. Descargar ISO de Ubuntu Server
```
https://ubuntu.com/download/server
# Versión: 24.04 LTS (Long Term Support)
```

### 3. Crear VM en VirtualBox
- **Nombre**: Ubuntu-Server-Lab
- **RAM**: 2GB (mínimo), 4GB (recomendado)
- **Disco**: 25GB dinámico
- **Red**: NAT + Host-Only Adapter

### 4. Instalar Ubuntu Server
- Configuración mínima
- Instalar OpenSSH server
- No instalar ningún paquete adicional (lo harás después)

## Configuraciones importantes

### Red: NAT + Host-Only

**NAT**: Para que la VM tenga internet
**Host-Only**: Para que puedas conectarte desde tu máquina host
```bash
# En la VM, editar /etc/netplan/00-installer-config.yaml
network:
  ethernets:
    enp0s3:  # Adaptador NAT
      dhcp4: true
    enp0s8:  # Adaptador Host-Only
      dhcp4: true
  version: 2

# Aplicar configuración
sudo netplan apply
```

### SSH desde tu máquina host
```bash
# En la VM, instalar SSH server
sudo apt update
sudo apt install openssh-server

# Obtener IP del adaptador Host-Only
ip addr show enp0s8

# Desde tu máquina host (Windows/Linux/Mac)
ssh usuario@192.168.56.101  # (ejemplo de IP)
```

### Snapshots: tu salvavidas

Antes de hacer algo peligroso:
1. Apaga la VM
2. VirtualBox → VM → Snapshots → Take
3. Nómbralo descriptivamente: "Antes de instalar MySQL"

Si algo sale mal: **Restore snapshot**.

## Lo que practico en mi lab

### 1. Administración de usuarios y permisos
```bash
# Crear usuarios
sudo adduser developer
sudo usermod -aG sudo developer

# Configurar permisos
sudo chmod 755 /var/www/html
sudo chown -R www-data:www-data /var/www
```

### 2. Instalación de servicios
```bash
# LAMP Stack
sudo apt install apache2 mysql-server php libapache2-mod-php

# Nginx + MySQL + PHP
sudo apt install nginx mysql-server php-fpm
```

### 3. Bases de datos
```bash
# MySQL
sudo mysql_secure_installation
mysql -u root -p

CREATE DATABASE testdb;
CREATE USER 'testuser'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON testdb.* TO 'testuser'@'localhost';
FLUSH PRIVILEGES;
```

### 4. Automatización con Bash
```bash
# Script de backup
#!/bin/bash
DATE=$(date +%Y%m%d)
mysqldump -u root -p testdb > /backup/testdb_$DATE.sql
```

## Tips que me salvaron la vida

1. **Snapshots antes de todo**: Antes de instalar, actualizar o configurar algo nuevo, crea un snapshot.

2. **Documenta tus comandos**: Tengo un archivo `comandos-utiles.md` en cada VM con todos los comandos que uso frecuentemente.

3. **Usa SSH, no la consola de VirtualBox**: Es más cómodo, puedes copiar/pegar, y es lo que usarás en producción.

4. **Host-Only Adapter es clave**: Te permite tratar tu VM como un servidor remoto real.

5. **Backup de VMs completas**: Exporta tus VMs importantes como `.ova` cada cierto tiempo.

## Recursos de aprendizaje

- **Linux Journey**: linuxjourney.com (gratis, excelente para principiantes)
- **DigitalOcean Tutorials**: digitalocean.com/community/tutorials
- **Linux Academy** (ahora A Cloud Guru)

## Próximos pasos

Actualmente estoy aprendiendo:
- **KVM** (virtualización nativa de Linux)
- **Docker** (contenedores)
- **Kubernetes** (orquestación)

Pero todo empezó con VirtualBox + Ubuntu Server.

---

**¿Tienes tu propio lab de aprendizaje?** Comparte tu setup en [LinkedIn](https://www.linkedin.com/in/oscarroman1/).
