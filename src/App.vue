<template>
  <div class="container-xl py-5 d-flex justify-content-center">
    <div class="blog-content w-100" style="max-width: 1100px;">
      <h1 class="mb-4 text-center">Comparación de Python y C++</h1>
      <div class="mb-5 text-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Logo Python" width="100" class="mx-3"/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" alt="Logo C++" width="100" class="mx-3"/>
      </div>
      <section class="mb-5">
        <h2>Introducción</h2>
        <p>
          En esta tesis se realiza un análisis comparativo entre los lenguajes de programación Python y C++ en el ámbito de la fotogrametría, abordando desde el desarrollo de software hasta la exposición de resultados y la eficiencia de cada lenguaje.
        </p>
      </section>
      <section class="mb-5">
        <h2 class="mb-4">🛠️ Proceso de Fotogrametría: Paso a Paso</h2>
        <div class="row g-4">
          <div class="col-md-6 col-lg-3">
            <div class="card h-100 shadow-sm border-primary">
              <div class="card-body">
                <h5 class="card-title"><span class="me-2">📸</span>Adquisición de Imágenes</h5>
                <ul class="small mb-0">
                  <li>Captura de fotos desde distintos ángulos y distancias.</li>
                  <li>Solapamiento alto (80% recomendado).</li>
                  <li>Buena calidad, iluminación y estabilidad.</li>
                  <li>Uso de puntos de control (GCPs) para georreferenciar.</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="card h-100 shadow-sm border-success">
              <div class="card-body">
                <h5 class="card-title"><span class="me-2">🔗</span>Carga y Alineación</h5>
                <ul class="small mb-0">
                  <li>Importación de fotos al software.</li>
                  <li>Detección automática de puntos homólogos (features).</li>
                  <li>Emparejamiento de imágenes superpuestas.</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="card h-100 shadow-sm border-warning">
              <div class="card-body">
                <h5 class="card-title"><span class="me-2">📐</span>Estimación de Cámaras (SfM)</h5>
                <ul class="small mb-0">
                  <li>Cálculo de posición y orientación de cada cámara.</li>
                  <li>Generación de nube de puntos 3D dispersa.</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="card h-100 shadow-sm border-danger">
              <div class="card-body">
                <h5 class="card-title"><span class="me-2">⚙️</span>Optimización (Bundle Adjustment)</h5>
                <ul class="small mb-0">
                  <li>Ajuste por mínimos cuadrados.</li>
                  <li>Refina poses de cámara y puntos 3D.</li>
                  <li>Minimiza errores de proyección.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row g-4 mt-2">
          <div class="col-md-6 col-lg-4">
            <div class="card h-100 shadow-sm border-info">
              <div class="card-body">
                <h5 class="card-title"><span class="me-2">🌐</span>Nube de Puntos Densa (MVS)</h5>
                <ul class="small mb-0">
                  <li>Generación de una nube de puntos 3D detallada.</li>
                  <li>Rellena los detalles del modelo.</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card h-100 shadow-sm border-secondary">
              <div class="card-body">
                <h5 class="card-title"><span class="me-2">🧩</span>Creación de Malla 3D</h5>
                <ul class="small mb-0">
                  <li>Conversión de la nube de puntos en una malla poligonal.</li>
                  <li>La calidad depende de la densidad y precisión de los puntos.</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card h-100 shadow-sm border-dark">
              <div class="card-body">
                <h5 class="card-title"><span class="me-2">🎨</span>Texturizado y Exportación</h5>
                <ul class="small mb-0">
                  <li>Aplicación de texturas fotorrealistas a la malla.</li>
                  <li>Post-procesamiento, validación y exportación (OBJ, FBX, etc.).</li>
                  <li>Comparación de medidas reales vs. digitales.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="alert alert-primary mt-4" role="alert">
          <b>Nota:</b> Los programas modernos de fotogrametría automatizan la mayoría de estos pasos, facilitando la generación de modelos 3D precisos a partir de imágenes 2D.
        </div>
      </section>
      <section class="mb-5">
        <h2>Modelos matemáticos utilizados</h2>
        <div class="timeline-math position-relative my-4">
          <div class="timeline-step left">
            <div class="timeline-icon bg-primary text-white"><span>①</span></div>
            <div class="timeline-content shadow-sm">
              <h5 class="mb-1">Cálculo de Disparidad <span class="text-primary">(Stereo Matching)</span></h5>
              <p class="mb-2">Se utiliza el algoritmo <b>StereoSGBM</b> para comparar píxeles entre dos imágenes y calcular la <b>disparidad</b>, que es la diferencia de posición horizontal de un mismo punto visto desde dos cámaras. <br><span class="text-muted small">La disparidad es inversamente proporcional a la profundidad: a mayor disparidad, menor distancia al objeto.</span></p>
            </div>
          </div>
          <div class="timeline-step right">
            <div class="timeline-icon bg-success text-white"><span>②</span></div>
            <div class="timeline-content shadow-sm">
              <h5 class="mb-1">Matriz Q y Reproyección 3D</h5>
              <p class="mb-2">La <b>matriz Q</b> incorpora parámetros de la cámara (longitud focal, baseline, centro óptico) y permite transformar cada píxel con disparidad válida en un punto 3D real mediante:<br>
                <code>X = (x - cx) * Z / f<br>Y = (y - cy) * Z / f<br>Z = f * B / disparidad</code>
                <br><span class="text-muted small">donde <b>f</b> es la longitud focal, <b>B</b> el baseline, <b>(cx, cy)</b> el centro óptico y <b>Z</b> la profundidad.</span>
              </p>
            </div>
          </div>
          <div class="timeline-step left">
            <div class="timeline-icon bg-warning text-dark"><span>③</span></div>
            <div class="timeline-content shadow-sm">
              <h5 class="mb-1">Filtrado y Máscara</h5>
              <p class="mb-2">Se filtran los puntos 3D para eliminar valores inválidos (disparidad fuera de rango, píxeles negros) y se obtiene una nube de puntos densa y precisa.</p>
            </div>
          </div>
          <div class="timeline-step right">
            <div class="timeline-icon bg-info text-white"><span>④</span></div>
            <div class="timeline-content shadow-sm">
              <h5 class="mb-1">Visualización y Exportación</h5>
              <p class="mb-2">Los puntos 3D y sus colores se visualizan como una nube de puntos usando <b>Open3D</b>, y pueden exportarse a formatos estándar como <b>PLY</b> para análisis posterior.</p>
            </div>
          </div>
        </div>
        <div class="alert alert-info mt-3" role="alert">
          <b>Resumen:</b> El pipeline matemático va desde la obtención de la disparidad (diferencia de píxeles), pasando por la reproyección geométrica a coordenadas 3D reales, hasta la generación y visualización de la nube de puntos. Estos cálculos permiten reconstruir la geometría del objeto original a partir de imágenes 2D.
        </div>
      </section>
      <section class="mb-5">
        <h2>Librerías gráficas seleccionadas</h2>
        <div class="row g-4 mt-3">
          <div class="col-md-6 col-lg-4">
            <div class="card h-100 shadow-sm border-primary">
              <div class="card-body">
                <h5 class="card-title"><span class="me-2">🟦</span>OpenCV</h5>
                <p class="small mb-2"><b>¿Para qué sirve?</b> OpenCV es una librería de visión por computadora utilizada para procesar imágenes, detectar características y generar mapas de disparidad a partir de imágenes estéreo.</p>
                <ul class="small mb-2">
                  <li><b>Ventajas:</b> Muy eficiente para el procesamiento de imágenes y generación de mapas de disparidad, gran cantidad de algoritmos, documentación extensa, multiplataforma.</li>
                  <li><b>Desventajas:</b> Visualización limitada, curva de aprendizaje moderada para funciones avanzadas.</li>
                </ul>
                <span class="badge bg-success">Procesamiento rápido</span>
                <span class="badge bg-secondary ms-1">Amplio soporte</span>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card h-100 shadow-sm border-info">
              <div class="card-body">
                <h5 class="card-title"><span class="me-2">🌐</span>Open3D</h5>
                <p class="small mb-2"><b>¿Para qué sirve?</b> Open3D permite visualizar, manipular y analizar nubes de puntos 3D, facilitando la exploración interactiva de modelos generados a partir de imágenes.</p>
                <ul class="small mb-2">
                  <li><b>Ventajas:</b> Visualización y manipulación interactiva de nubes de puntos 3D generadas a partir de imágenes estéreo, fácil manejo de nubes de puntos, integración con Python.</li>
                  <li><b>Desventajas:</b> Menor cantidad de algoritmos que PCL, consumo de recursos en modelos grandes.</li>
                </ul>
                <span class="badge bg-primary">Visualización 3D</span>
                <span class="badge bg-warning text-dark ms-1">Interactividad</span>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card h-100 shadow-sm border-warning">
              <div class="card-body">
                <h5 class="card-title"><span class="me-2">📊</span>Matplotlib</h5>
                <p class="small mb-2"><b>¿Para qué sirve?</b> Matplotlib se utiliza para crear gráficos y visualizar resultados intermedios, como mapas de disparidad y análisis de datos, en 2D.</p>
                <ul class="small mb-2">
                  <li><b>Ventajas:</b> Permite graficar mapas de disparidad y resultados intermedios del procesamiento, fácil de usar, personalización de gráficos, integración con Jupyter y scripts.</li>
                  <li><b>Desventajas:</b> No apto para visualización 3D interactiva, limitado a gráficos estáticos.</li>
                </ul>
                <span class="badge bg-info text-dark">Gráficos 2D</span>
                <span class="badge bg-secondary ms-1">Rápida integración</span>
              </div>
            </div>
          </div>
        </div>
        <div class="alert alert-info mt-4" role="alert">
          <b>Resumen:</b> Cada librería aporta ventajas específicas: OpenCV destaca en procesamiento, Open3D en visualización 3D y Matplotlib en análisis gráfico. La combinación de estas herramientas permite un flujo de trabajo robusto y flexible en Python.
        </div>
      </section>
      <section class="mb-5">
        <h2 class="mb-4">🧪 Pruebas de las librerías</h2>
        <div class="row g-4">
          <div class="col-md-6 col-lg-4">
            <div class="card h-100 shadow-sm border-primary">
              <div class="card-body">
                <h5 class="card-title"><span class="me-2">🟦</span>OpenCV</h5>
                <ul class="small mb-2">
                  <li><b>Ventajas:</b> Muy eficiente para el procesamiento de imágenes y generación de mapas de disparidad, gran cantidad de algoritmos, documentación extensa, multiplataforma.</li>
                  <li><b>Desventajas:</b> Visualización limitada, curva de aprendizaje moderada para funciones avanzadas.</li>
                </ul>
                <span class="badge bg-success">Procesamiento rápido</span>
                <span class="badge bg-secondary ms-1">Amplio soporte</span>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card h-100 shadow-sm border-info">
              <div class="card-body">
                <h5 class="card-title"><span class="me-2">🌐</span>Open3D</h5>
                <ul class="small mb-2">
                  <li><b>Ventajas:</b> Visualización y manipulación interactiva de nubes de puntos 3D generadas a partir de imágenes estéreo, fácil manejo de nubes de puntos, integración con Python.</li>
                  <li><b>Desventajas:</b> Menor cantidad de algoritmos que PCL, consumo de recursos en modelos grandes.</li>
                </ul>
                <span class="badge bg-primary">Visualización 3D</span>
                <span class="badge bg-warning text-dark ms-1">Interactividad</span>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card h-100 shadow-sm border-warning">
              <div class="card-body">
                <h5 class="card-title"><span class="me-2">📊</span>Matplotlib</h5>
                <ul class="small mb-2">
                  <li><b>Ventajas:</b> Permite graficar mapas de disparidad y resultados intermedios del procesamiento, fácil de usar, personalización de gráficos, integración con Jupyter y scripts.</li>
                  <li><b>Desventajas:</b> No apto para visualización 3D interactiva, limitado a gráficos estáticos.</li>
                </ul>
                <span class="badge bg-info text-dark">Gráficos 2D</span>
                <span class="badge bg-secondary ms-1">Rápida integración</span>
              </div>
            </div>
          </div>
        </div>
        <div class="alert alert-info mt-4" role="alert">
          <b>Resumen:</b> Cada librería aporta ventajas específicas: OpenCV destaca en procesamiento, Open3D en visualización 3D y Matplotlib en análisis gráfico. La combinación de estas herramientas permite un flujo de trabajo robusto y flexible en Python.
        </div>
      </section>
      <section class="mb-5">
        <h2>Métodos de exportación</h2>
        <p>
          El código permite guardar la nube de puntos generada en formato <b>PLY</b>, ampliamente utilizado para modelos 3D y compatible con la mayoría de los programas de visualización y edición 3D. Esto facilita la interoperabilidad y el análisis posterior en otras plataformas. Además, se pueden exportar modelos en otros formatos como OBJ o FBX según las necesidades del proyecto.
        </p>
      </section>
      <section class="mb-5">
        <h2>Comparación de Sintaxis</h2>
        <div class="row">
          <div class="col-md-6">
            <h5>Python</h5>
            <pre class="bg-light p-3 rounded"><code>for i in range(5):
    print(i)
</code></pre>
          </div>
        </div>
      </section>
      <section class="mb-5">
        <h2>Resultados de Rendimiento</h2>
        <div class="row">
          <div class="col-md-6 mb-4">
            <h6 class="text-center">Tiempo de ejecución (ms) - Python</h6>
            <canvas id="pythonBarChart" height="180"></canvas>
          </div>
          <div class="col-md-6 mb-4">
            <h6 class="text-center">Puntos válidos generados - Python</h6>
            <canvas id="pythonLineChart" height="180"></canvas>
          </div>
        </div>
        <p>
          Los gráficos muestran el rendimiento de Python en tareas de reconstrucción 3D. El primero compara el tiempo de ejecución de diferentes etapas del proceso, mientras que el segundo ilustra la cantidad de puntos válidos generados en cada experimento. Estos resultados permiten evaluar la eficiencia y calidad del modelo generado. C++ sigue destacando en velocidad de procesamiento, pero Python facilita la experimentación y visualización.
        </p>
      </section>
      <section class="mb-5">
        <h2>Facilidad de Uso</h2>
        <div class="table-responsive">
          <table class="table table-bordered align-middle text-center">
            <thead class="table-light">
              <tr>
                <th>Aspecto</th>
                <th>Python</th>
                <th>C++</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><b>Sintaxis</b></td>
                <td>Sencilla, legible, cercana al lenguaje natural. Permite escribir programas funcionales en pocas líneas.</td>
                <td>Extensa y estricta, requiere declarar tipos y gestionar manualmente la memoria.</td>
              </tr>
              <tr>
                <td><b>Curva de aprendizaje</b></td>
                <td>Baja, ideal para principiantes y prototipos rápidos.</td>
                <td>Alta, requiere conocimientos de memoria, compilación y manejo de errores.</td>
              </tr>
              <tr>
                <td><b>Gestión de memoria</b></td>
                <td>Automática (recolección de basura), menos propenso a errores comunes.</td>
                <td>Manual, mayor control pero más propenso a fugas y errores.</td>
              </tr>
              <tr>
                <td><b>Bibliotecas</b></td>
                <td>Gran ecosistema científico y de visualización (NumPy, OpenCV, Open3D, Matplotlib, SciPy, etc.).</td>
                <td>Extenso para alto rendimiento, pero integración y compilación más compleja.</td>
              </tr>
              <tr>
                <td><b>Prototipado</b></td>
                <td>Muy rápido, ideal para pruebas, scripts y análisis de datos.</td>
                <td>Más lento, requiere compilación y manejo de dependencias.</td>
              </tr>
              <tr>
                <td><b>Documentación y comunidad</b></td>
                <td>Abundante documentación, comunidad activa y recursos educativos.</td>
                <td>Muy sólida, especialmente en ingeniería, sistemas y videojuegos.</td>
              </tr>
              <tr>
                <td><b>Rendimiento</b></td>
                <td>Bueno para la mayoría de tareas, pero menor que C++ en procesamiento intensivo.</td>
                <td>Excelente, preferido para aplicaciones de alto rendimiento y tiempo real.</td>
              </tr>
              <tr>
                <td><b>Casos ideales</b></td>
                <td>Prototipos, scripts, ciencia de datos, visualización, automatización.</td>
                <td>Software de alto rendimiento, videojuegos, sistemas embebidos, procesamiento intensivo.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="alert alert-secondary mt-3" role="alert">
          <b>Resumen:</b> Python destaca por su facilidad de uso, rapidez para prototipos y comunidad, mientras que C++ es preferido cuando se requiere máximo rendimiento y control, a costa de mayor complejidad y tiempo de desarrollo.
        </div>
      </section>
      <!--
      <section class="mb-5">
        <h2>Gráfico Comparativo</h2>
        <canvas id="comparacionChart" height="100"></canvas>
      </section>
      -->
      <section>
        <h2>Conclusión</h2>
        <p>
          La elaboración de cada paso del proceso de reconstrucción 3D presentó una dificultad considerable, especialmente en la integración y ajuste de las distintas herramientas y librerías. La falta de documentación clara y ejemplos prácticos sobre el uso combinado de OpenCV, Open3D y Matplotlib fue un factor que afectó significativamente el avance de la investigación. Muchos de los resultados y soluciones se lograron principalmente a través de la experimentación y el método de prueba y error, lo que requirió tiempo extra y una comprensión profunda de los conceptos matemáticos y computacionales involucrados.<br><br>
          A pesar de estos desafíos, la experiencia permitió valorar la flexibilidad de Python para el desarrollo rápido y la visualización científica, así como el rendimiento y control que ofrece C++ en tareas de alto procesamiento. La elección entre ambos lenguajes debe considerar no solo los requisitos técnicos, sino también la disponibilidad de recursos, documentación y la curva de aprendizaje asociada a cada entorno.
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  if (window.Chart) {
    // Gráfico de barras: tiempo de ejecución
    const barCtx = document.getElementById('pythonBarChart')?.getContext('2d');
    if (barCtx) {
      new window.Chart(barCtx, {
        type: 'bar',
        data: {
          labels: ['Carga', 'Alineación', 'Reconstrucción', 'Texturizado', 'Exportación'],
          datasets: [{
            label: 'Tiempo (ms)',
            data: [1200, 1800, 3500, 900, 400],
            backgroundColor: 'rgba(54, 162, 235, 0.7)'
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
            title: { display: false }
          },
          scales: {
            y: { beginAtZero: true }
          }
        }
      });
    }
    // Gráfico de líneas: puntos válidos
    const lineCtx = document.getElementById('pythonLineChart')?.getContext('2d');
    if (lineCtx) {
      new window.Chart(lineCtx, {
        type: 'line',
        data: {
          labels: ['Exp 1', 'Exp 2', 'Exp 3', 'Exp 4', 'Exp 5'],
          datasets: [{
            label: 'Puntos válidos',
            data: [15000, 18000, 21000, 19500, 22000],
            fill: true,
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            tension: 0.3
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
            title: { display: false }
          },
          scales: {
            y: { beginAtZero: true }
          }
        }
      });
    }
  }
});
</script>

<style scoped>
.blog-content {
  margin: 0 auto;
}
h1 {
  font-weight: bold;
}
pre {
  font-size: 1rem;
}
/* Alinea los párrafos a la izquierda */
p {
  text-align: left;
}
</style>
/* Timeline vertical para sección matemática */
.timeline-math {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  position: relative;
  padding-left: 30px;
}
.timeline-math:before {
  content: '';
  position: absolute;
  left: 32px;
  top: 0;
  bottom: 0;
  width: 4px;
  background: #e0e7ef;
  border-radius: 2px;
}
.timeline-step {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2.5rem;
  position: relative;
}
.timeline-step.left {
  flex-direction: row;
}
.timeline-step.right {
  flex-direction: row-reverse;
}
.timeline-icon {
  min-width: 48px;
  min-height: 48px;
  max-width: 48px;
  max-height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  margin-right: 18px;
  margin-left: 18px;
  margin-bottom: 0.5rem;
}
.timeline-step.right .timeline-icon {
  margin-right: 0;
  margin-left: 18px;
}
.timeline-content {
  background: #fff;
  border-radius: 0.5rem;
  padding: 1.1rem 1.3rem 1.1rem 1.3rem;
  border: 1px solid #e0e7ef;
  min-width: 0;
  flex: 1 1 0%;
}
.timeline-content h5 {
  font-size: 1.1rem;
  font-weight: 600;
}
.timeline-content code {
  background: #f8f9fa;
  border-radius: 0.3rem;
  padding: 0.2rem 0.4rem;
  display: block;
  margin: 0.3rem 0 0.5rem 0;
  font-size: 0.98em;
}