# A-Comparative-Analysis-of-Generative-Adversarial-Network-Architectures-


## Abstract
<p align="justify">Generative Adversarial Networks (GANs) represent a significant paradigm in generative artificial intelligence, yet their training is notoriously fraught with instability, mode collapse, and vanishing gradients. This report presents a rigorous comparative analysis of three distinct GAN architectures to evaluate their efficacy in overcoming these challenges. We implement and train a foundational Vanilla GAN, the theoretically-grounded Wasserstein GAN with Gradient Penalty (WGAN-GP) and their comparison in generating better results across different datasets with change in different hyperparameters. These models are systematically evaluated across three datasets of increasing complexity and diversity: the handwritten digits of MNIST, the natural object images of CIFAR-10, and a high-variance Anime Face dataset. Performance is assessed through a multi-faceted protocol, including quantitative metrics-Fréchet Inception Distance (FID) and Inception Score (IS)-qualitative inspection of generated sample fidelity and diversity, and an analysis of training dynamics. Our findings empirically validate the superior stability and sample quality of WGAN-GP over the WGAN and Vanilla GAN, particularly on complex, high-dimensional data. This work contributes a comprehensive empirical benchmark and provides insights into the synergistic potential of combining adversarial and contrastive learning principles for robust image synthesis. </p>


## 🧠 Overview
This project presents a detailed comparative study of **Vanilla GAN**, **Wasserstein GAN (WGAN)**, and **WGAN with Gradient Penalty (WGAN-GP)**, implemented across datasets of increasing complexity—**MNIST**, **CIFAR-10**, and **Anime Faces**.  
The goal is to analyze **training stability**, **sample quality**, and **theoretical robustness** of each architecture.

---

## 🚀 Technologies Used
- Python 3.9  
- PyTorch  
- Torchvision  
- Matplotlib  
- NumPy  
- Scikit-learn  
- Frechet Inception Distance (torchmetrics)  
- Google Colab  
- Kaggle  

---

## 📊 Evaluation Metrics
- **Fréchet Inception Distance (FID)**  
- **Inception Score (IS)**  
- **Visual Fidelity**  
- **Loss Dynamics**

---

## 🖼 Sample Outputs
Add a few generated images from each model and dataset:  
- MNIST  
- CIFAR-10  
- Anime Faces

---

## 📈 Key Insights
- ✅ WGAN-GP shows the best performance in terms of **training stability** and **image quality**.  
- ⚠️ Vanilla GAN is prone to **mode collapse** and **unstable gradients**.  
- 📉 FID score **correlates well with visual quality** across all datasets.

---

## 📄 Full Report
https://docs.google.com/document/d/14ILdxdc2qljDoKtwGzHv4sGrYAeMZnjfXZrNbiJSzLc/edit?usp=sharing

---

## 👨‍💻 Authors
- **Parthajit Das**  
- **Souvick Roy**  
- **Aditya Agarwal**

