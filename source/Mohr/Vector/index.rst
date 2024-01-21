.. role:: raw-html(raw)
   :format: html


.. # define a hard line break for HTML

.. |br| raw:: html

   <br />

.. _vector_2D:

Vektor 2D
---------

.. _vector_2D_matrix:

1. Berechnung mit Matrizen
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. admonition:: Beispiel: Berechnung mit Matrizen
   :class: note

   Formel: Passive Transformation von Vektor-Komponenten:

   .. math::

      \begin{bmatrix}
      v_{\bar x}  \\
      v_{\bar y}
      \end{bmatrix}=
      \underbrace{
      \begin{bmatrix}
      c_\varphi & s_\varphi \\
      -s_\varphi & c_\varphi
      \end{bmatrix}
      }_R
      \begin{bmatrix}
      v_x  \\
      v_y
      \end{bmatrix}

   mit den Abkürzungen :math:`c_\varphi = \cos \varphi` und :math:`s_\varphi = \sin \varphi.`

   1. 
      Gegebene Komponenten ganz rechts in der Formel verwenden, z.B.
      
      .. math::
   
         \begin{bmatrix}
         v_x  \\
         v_y
         \end{bmatrix}
         =
         \begin{bmatrix}
         3  \\
         4
         \end{bmatrix}    

   2. 
      Gegebenen Winkel verwenden, um die Drehmatrix :math:`R` zu füllen. Für :math:`\varphi = 30^\circ` ist z.B.:

      .. math::
         R = 
         \begin{bmatrix}
         c_{30^\circ} & s_{30^\circ} \\
         -s_{30^\circ} & c_{30^\circ}
         \end{bmatrix}

   3. 
      Mit Matrix-Multiplikation die gesuchten Komponenten berechnen. Für das Beispiel ergibt sich:

      .. math::
         \begin{bmatrix}
         v_{\bar x}  \\
         v_{\bar y}
         \end{bmatrix}
         &=
         \begin{bmatrix}
         c_{30^\circ} & s_{30^\circ} \\
         -s_{30^\circ} & c_{30^\circ}
         \end{bmatrix}
         \begin{bmatrix}
         3  \\
         4
         \end{bmatrix}    
         \\
         &\stackrel{0{,}01}{\approx} 
         \begin{bmatrix}
         4{,}6  \\
         1{,}96
         \end{bmatrix}    

      wie man mit dem Taschenrechner oder im Browser mit nachfolgendem Programm prüfen kann.

   .. include:: ../../sympy.rst

.. _vector_2D_mohr:

2. Ablesen am Mohrschen Kreis
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. admonition:: Zeichnen des Kreises
   :class: error

   * 
      Achsen :math:`v_{\bar x}` und :math:`v_{\bar y}` zeichnen.
   * 
      Einen Punkt zeichnen bei:

      .. math::

         (v_{\bar x}, v_{\bar y}) = (v_x, v_y)
   * 
      Einen zweiten Punkt zeichnen bei:

      .. math::

         (v_{\bar x}, v_{\bar y}) = (-v_x, -v_y)

   *
      Der Punkt in der Mitte zwischen den Punkten ist der Mittelpunkt des Mohrschen Kreises.
   
   *
      Beide Punkte liegen auf dem Mohrschen Kreis.

.. raw:: html
   :file: ../../_static/html/Bokeh/A/trafo_vector.html

.. admonition:: Beispiel: Ablesen am Kreis
   :class: hint

   **Gegeben**

   *
      Rechts die gegebenen Komponenten eintragen, z.B.:
      
      .. math::
         
         (v_x, v_y)= (3, 4)

   *
      Rechts am Schieberegler den gegebenen Winkel einstellen, z.B. :math:`\varphi = 30^\circ.`
   
   **Gesucht**:

   *

      Am hellblauen Punkt liest man für z.B. für :math:`\varphi = 30^\circ` ab:

      
      .. math::
         :nowrap:
      
         \begin{align*}
         (v_{\bar x}, v_{\bar y})   & \stackrel{0{,}01}{\approx} (4.6, 1.96) \\
         \end{align*}

   * 
      Wenn man rechts noch den **Pt. at φ ± 180°** einschaltet, liest man an diesem magentafarbenen Punkt z.B. für :math:`\varphi = 30^\circ\pm 180^\circ` ab:
      
      .. math::
         :nowrap:
      
         \begin{align*}
         (-v_{\bar x}, -v_{\bar y}) & \stackrel{0{,}01}{\approx} (-4.6, -1.96) 
         \end{align*}

      Dazu Maus über diesen Punkt bewegen.