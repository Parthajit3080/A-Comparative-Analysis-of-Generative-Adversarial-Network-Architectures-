import { useState } from 'react'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const technologies = [
    'Python 3.10+',
    'PyTorch',
    'Torchvision',
    'Matplotlib',
    'NumPy',
    'Scikit-learn',
    'FID (torchmetrics)',
    'Google Colab',
    'Kaggle'
  ]

  const datasets = [
    {
      name: 'MNIST',
      description: 'Handwritten digits dataset with 60,000 training images',
      complexity: 'Low'
    },
    {
      name: 'CIFAR-10',
      description: '60,000 32x32 color images in 10 classes',
      complexity: 'Medium'
    },
    {
      name: 'Anime Faces',
      description: 'High-resolution anime character faces dataset',
      complexity: 'High'
    }
  ]

  const insights = [
    {
      title: 'Best Performance',
      description: 'WGAN-GP shows the best performance in terms of training stability and image quality'
    },
    {
      title: 'Mode Collapse',
      description: 'Vanilla GAN is prone to mode collapse and unstable gradients'
    },
    {
      title: 'FID Correlation',
      description: 'FID score correlates well with visual quality across all datasets'
    }
  ]

  const authors = [
    { name: 'Parthajit Das', role: 'Researcher' },
    { name: 'Souvick Roy', role: 'Researcher' },
    { name: 'Aditya Agarwal', role: 'Researcher' }
  ]

  const metrics = [
    'Fréchet Inception Distance (FID)',
    'Inception Score (IS)',
    'Visual Fidelity',
    'Loss Dynamics'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gradient">GAN Research</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#tech" className="text-gray-700 hover:text-blue-600 transition-colors">Technologies</a>
              <a href="#results" className="text-gray-700 hover:text-blue-600 transition-colors">Results</a>
              <a href="#authors" className="text-gray-700 hover:text-blue-600 transition-colors">Authors</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            Comparative Analysis of GANs
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            A detailed comparative study of Vanilla GAN, Wasserstein GAN (WGAN), and WGAN with Gradient Penalty (WGAN-GP)
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://drive.google.com/file/d/1Penj5b-6YqdN88TWfryNkvliruPE1K69/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
            >
              Read Full Report
            </a>
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-gray-700 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all border-2 border-gray-200"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
            Project Overview
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Research Goal</h3>
              <p className="text-gray-700 leading-relaxed">
                This project presents a detailed comparative study of three GAN architectures implemented across datasets of increasing complexity. The goal is to analyze training stability, sample quality, and theoretical robustness of each architecture.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-purple-600">Architectures Studied</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span><strong>Vanilla GAN:</strong> Original generative adversarial network</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span><strong>WGAN:</strong> Wasserstein GAN with improved training stability</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span><strong>WGAN-GP:</strong> WGAN with gradient penalty for better convergence</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="tech" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
            Technologies Used
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all text-center"
              >
                <p className="font-semibold text-gray-800">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Datasets Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
            Datasets
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {datasets.map((dataset, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="mb-4">
                  <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${
                    dataset.complexity === 'Low' ? 'bg-green-100 text-green-700' :
                    dataset.complexity === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {dataset.complexity} Complexity
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{dataset.name}</h3>
                <p className="text-gray-600">{dataset.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
            Evaluation Metrics
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
              >
                <p className="font-semibold text-white text-center">{metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
            Sample Outputs
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mb-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-600 mb-2">Generated Images</p>
                <p className="text-gray-500">Sample outputs from trained GAN models</p>
              </div>
            </div>
            <p className="text-gray-600 text-center">
              The models generate high-quality synthetic images across MNIST, CIFAR-10, and Anime Faces datasets
            </p>
          </div>
        </div>
      </section>

      {/* Key Insights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
            Key Insights
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-t-4 border-blue-500"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-800">{insight.title}</h3>
                <p className="text-gray-600 leading-relaxed">{insight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authors Section */}
      <section id="authors" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
            Research Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {authors.map((author, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">
                    {author.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{author.name}</h3>
                <p className="text-gray-600">{author.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gradient">GAN Research Project</h3>
              <p className="text-gray-400">
                A comprehensive comparative analysis of Generative Adversarial Network architectures
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#tech" className="text-gray-400 hover:text-white transition-colors">Technologies</a></li>
                <li><a href="#results" className="text-gray-400 hover:text-white transition-colors">Results</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://drive.google.com/file/d/1Penj5b-6YqdN88TWfryNkvliruPE1K69/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Full Report
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    GitHub Repository
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 GAN Research Project. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
