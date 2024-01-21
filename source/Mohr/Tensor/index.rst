.. role:: raw-html(raw)
   :format: html


.. # define a hard line break for HTML

.. |br| raw:: html

   <br />

.. _tensor_2D:

Tensor 2D
---------

.. _tensor_2D_matrix:


1. Berechnung mit Matrizen
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. admonition:: Beispiel: Berechnung mit Matrizen
   :class: note

   Formel: Passive Transformation von Tensor-Komponenten:

   .. math::

      \begin{bmatrix}
      T_{\bar x \bar x} & T_{\bar x\bar y} \\
      \mathsf{sym} & T_{\bar y\bar y}
      \end{bmatrix}
      =
      \underbrace{
      \begin{bmatrix}
      c_\varphi & s_\varphi \\
      -s_\varphi & c_\varphi
      \end{bmatrix}
      }_R
      \begin{bmatrix}
      T_{xx} & T_{xy} \\
      \mathsf{sym} & T_{yy}
      \end{bmatrix}   
      \underbrace{
      \begin{bmatrix}
      c_\varphi & -s_\varphi \\
      s_\varphi & c_\varphi
      \end{bmatrix}
      }_{R^{\mathsf T}}


   1. 
      Gegebene Komponenten in der Formel verwenden, z.B.
      
      .. math::
   
         \begin{bmatrix}T_{xx} & T_{xy} \\   \mathsf{sym} & T_{yy}   \end{bmatrix}   =   \begin{bmatrix}   2 & 1 \\   \mathsf{sym} & 1{,}5   \end{bmatrix}

   2. 
      Gegebenen Winkel verwenden, um die Drehmatrix :math:`R` zu füllen sowie die dazu transposierte Matrix :math:`R^{\mathsf T}`. Für :math:`\varphi = 20^\circ` ist z.B.:

      .. math::
         R &= 
         \begin{bmatrix}
         c_{20^\circ} & s_{20^\circ} \\
         -s_{20^\circ} & c_{20^\circ}
         \end{bmatrix}
         \\
         R^{\mathsf T}
         &=
         \begin{bmatrix}
         c_{20^\circ} & -s_{20^\circ} \\
         s_{20^\circ} & c_{20^\circ}
         \end{bmatrix}
   3. 
      Mit Matrix-Multiplikation die gesuchten Komponenten berechnen. Für das Beispiel ergibt sich:

      .. math::
         \begin{bmatrix}
         T_{\bar x \bar x} & T_{\bar x\bar y} \\
         \mathsf{sym} & T_{\bar y\bar y}
         \end{bmatrix}
         \stackrel{0{,}01}{\approx} 
         \begin{bmatrix}
         2{,}58 & 0{,}61 \\
         \mathsf{sym} & 0{,}92
         \end{bmatrix}

      wie man mit dem Taschenrechner oder im Browser mit nachfolgendem Programm prüfen kann.

   .. include:: ../../sympy.rst

.. _tensor_2D_mohr:

2. Ablesen am Mohrschen Kreis
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. admonition:: Zeichnen des Kreises
   :class: error

   * 
      Achsen :math:`T_{\bar x \bar x}` und :math:`T_{\bar x \bar y}` zeichnen.
   * 
      Einen Punkt zeichnen bei:

      .. math::

         (T_{\bar x \bar x}, T_{\bar x\bar y}) = (T_{xx}, T_{xy})
   * 
      Einen zweiten Punkt zeichnen bei:

      .. math::

         (T_{\bar x \bar x}, T_{\bar x\bar y}) = (T_{yy}, -T_{xy})

   *
      Der Punkt in der Mitte zwischen den Punkten ist der Mittelpunkt des Mohrschen Kreises.
   
   *
      Beide Punkte liegen auf dem Mohrschen Kreis.

.. raw:: html
   :file: ../../_static/html/Bokeh/A/trafo_tensor.html

.. admonition:: Beispiel: Ablesen am Kreis
   :class: hint

   **Gegeben**

   *
      Rechts die gegebenen Komponenten eintragen, z.B.:
      
      .. math::
         
         \begin{bmatrix}T_{xx} & T_{xy} \\   \mathsf{sym} & T_{yy}   \end{bmatrix}   =   \begin{bmatrix}   2 & 1 \\   \mathsf{sym} & 1{,}5   \end{bmatrix}

   *
      Rechts am Schieberegler den gegebenen Winkel einstellen, z.B. :math:`\varphi = 20^\circ.`
   
   **Gesucht**:

   *

      Am hellblauen Punkt liest man für z.B. für :math:`\varphi = 20^\circ` ab:

      
      .. math::
         :nowrap:
      
         \begin{align*}
         (T_{\bar x \bar x}, T_{\bar x\bar y}) \stackrel{0{,}01}{\approx}  (2.58, 0.61) \\
         \end{align*}
      
   * 
      Wenn man rechts noch den **Pt. at φ ± 90°** einschaltet, liest man an diesem magentafarbenen Punkt z.B. für :math:`\varphi = 20^\circ\pm 180^\circ` ab:
      
      .. math::
         :nowrap:
      
         \begin{align*}
         (T_{\bar y \bar y}, -T_{\bar x\bar y})\stackrel{0{,}01}{\approx}  (0.92, - 0.61)
         \end{align*}

      Dazu Maus über diesen Punkt bewegen.

.. :raw-html:`<details><summary>Mohrscher Kreis</summary><div class="myDiv"><p>`

.. *  
..    **Oben** in den zwei Feldern die **bekannten** Komponenten einstellen. Also die Komponenten, die sich auf das **erste** Bezugssystem beziehen, zum Beispiel:
   
..       .. math::
..          \begin{bmatrix}
..          v_x  \\
..          v_y
..          \end{bmatrix}=
..          \begin{bmatrix}
..          3  \\
..          4
..          \end{bmatrix}

.. *
..     **Rechts** am Schieberegler den Winkel :math:`\varphi` einstellen, um den das zweite Bezugssystem relati


.. :raw-html:`</p></div></details>`

.. .. admonition:: Anleitung
..    :class: note 

..    1. 
      
     

..    2. 

